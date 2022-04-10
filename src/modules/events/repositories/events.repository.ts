import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Event } from 'src/shared/entities/event.entity';
import { getNowDate } from 'src/shared/functions/getNowDate';

@Injectable()
export class EventRepo {
  private nowDate: string = getNowDate();
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
        AND date > $2
      ORDER BY is_promoted DESC;
      `,
      [userId, this.nowDate],
    );
  }

  async listEventAddress(eventId?: string): Promise<Event[]> {
    const eventsOnline = await this.repository.find({
      where: {
        isOnline: true,
        deletedAt: null,
      },
    });

    let query = ` SELECT to_char(date, 'DD/MM/YYYY') as date, ev.*, ad.id as address_id, ad.* FROM events ev 
                        INNER JOIN addresses ad ON ev.id = ad.event_id
                    WHERE ev.deleted_at IS NULL AND date > $1 `;
    if (eventId) {
      query += 'AND ev.id = $2';
      return eventsOnline.concat(
        await this.repository.query(query, [this.nowDate, eventId]),
      );
    }
    query += 'ORDER BY is_promoted DESC';

    return eventsOnline.concat(
      await this.repository.query(query, [this.nowDate]),
    );
  }
}
