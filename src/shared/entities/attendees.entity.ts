import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Unique(['userId', 'eventId'])
@Entity('attendees')
export class Attendee {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  status: string;

  @Column({ name: 'user_id' })
  @JoinColumn({ name: 'user_id' })
  userId: string;

  @Column({ name: 'event_id' })
  @JoinColumn({ name: 'event_id' })
  eventId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @BeforeInsert()
  async createId() {
    this.id = uuidV4();
  }
}
