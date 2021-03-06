import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ActivityCategories } from './activityCategories.entity';
import { Event } from './event.entity';
import { MoodActivity } from './moodsActivities.entity';
import { UserInterest } from './userInterests.entity';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @Column({ name: 'url_active' })
  urlActive: string;

  @Column({ name: 'url_inactive' })
  urlInactive: string;

  @OneToMany(
    () => ActivityCategories,
    (activityCategories) => activityCategories.activities,
  )
  activityCategories: ActivityCategories;

  @OneToMany(() => UserInterest, (userInterests) => userInterests.activities)
  userInterests: UserInterest[];

  @OneToMany(() => MoodActivity, (moodsActivities) => moodsActivities.activity)
  moodsActivities: MoodActivity[];

  @OneToMany(() => Event, (events) => events.activities)
  events: Event[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
