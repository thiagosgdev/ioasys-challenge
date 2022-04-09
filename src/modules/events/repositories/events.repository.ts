import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Event } from 'src/shared/entities/event.entity';

@Injectable()
export class EventRepo {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}
  async listEventsByUserInterests(userId: string): Promise<Event[]> {
    return await this.repository.query(
      `
      SELECT ev.*, ac.name as activity_name FROM users_interests ui 
        INNER JOIN users us ON ui.user_id = us.id
        INNER JOIN events ev ON ui.activity_id = ev.activity_id
        INNER JOIN activities ac ON ui.activity_id = ac.id
        WHERE ui.user_id = $1 
        AND ui.deleted_at IS NULL 
      AND ac.active = true
      ORDER BY is_promoted DESC;
      `,
      [userId],
    );
  }

  async listEventAddress(eventId?: string): Promise<Event[]> {
    const eventsOnline = await this.repository.find({
      where: {
        isOnline: true,
        deletedAt: null,
      },
    });

    let query = ` SELECT ev.*, ad.id as address_id, ad.* FROM events ev 
                        INNER JOIN addresses ad ON ev.id = ad.event_id
                    WHERE ev.deleted_at IS NULL `;
    if (eventId) {
      query += 'AND ev.id = $1';
      return eventsOnline.concat(await this.repository.query(query, [eventId]));
    }
    query += 'ORDER BY is_promoted DESC';

    return eventsOnline.concat(await this.repository.query(query));
  }
}
