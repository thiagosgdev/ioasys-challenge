import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Activity } from './activity.entity';
import { User } from './user.entity';

@Entity('users_interests')
export class UserInterest {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'activity_id' })
  activityId: string;

  @ManyToOne(() => User, (user) => user.userInterests)
  @JoinColumn({ name: 'user_id' })
  users: User[];

  @ManyToOne(() => Activity, (activity) => activity.userInterests)
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
