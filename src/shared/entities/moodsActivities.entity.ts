import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Activity } from './activity.entity';
import { Mood } from './mood.entity';

@Entity('moods_activities')
export class MoodActivity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'mood_id' })
  moodId: string;

  @Column({ name: 'activity_id' })
  activityId: string;

  @ManyToOne(() => Activity, (activity) => activity.moodsActivities)
  @JoinColumn({ name: 'activity_id' })
  activity: Activity[];

  @ManyToOne(() => Mood, (moods) => moods.moodsActivities)
  @JoinColumn({ name: 'mood_id' })
  mood: Mood[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
