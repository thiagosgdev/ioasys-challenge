import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Activity } from './activity.entity';
import { User } from './user.entity';

@Entity('events')
export class Event {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column({ name: 'minimum_age' })
  minimumAge: number;

  @Column({ name: 'max_participants' })
  maxParticipants: number;

  @Column({ name: 'start_time' })
  startTime: string;

  @Column({ name: 'end_time' })
  endTime?: string;

  @Column({ name: 'activity_id' })
  activityId: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'is_accessible' })
  isAccessible: boolean;

  @ManyToOne(() => User, (user) => user.events)
  @JoinColumn({ name: 'user_id' })
  users: User[];

  @ManyToOne(() => Activity, (activities) => activities.events)
  @JoinColumn({ name: 'activity_id' })
  activities: Activity[];

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
