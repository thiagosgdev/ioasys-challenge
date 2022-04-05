import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
      AND ac.active = true;
      `,
      [userId],
    );
  }
}
