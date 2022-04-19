import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { MoodActivity } from './moodsActivities.entity';
import { UserMood } from './userMoods.entity';

@Entity('moods')
export class Mood {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @OneToMany(() => UserMood, (userMoods) => userMoods.mood)
  userMoods: UserMood[];

  @OneToMany(() => MoodActivity, (moodsActivities) => moodsActivities.mood)
  moodsActivities: MoodActivity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
