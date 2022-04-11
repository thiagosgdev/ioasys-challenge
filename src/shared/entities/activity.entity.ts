import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { ActivityCategories } from 'src/shared/entities/activityCategories.entity';
import { Event } from 'src/shared/entities/event.entity';
import { UserInterest } from 'src/shared/entities/userInterests.entity';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @OneToMany(
    () => ActivityCategories,
    (activityCategories) => activityCategories.activities,
  )
  activityCategories: ActivityCategories;

  @OneToMany(() => UserInterest, (userMoods) => userMoods.activities)
  userInterests: UserInterest[];

  @OneToMany(() => Event, (events) => events.activities)
  events: Event[];

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
