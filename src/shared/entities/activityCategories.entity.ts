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
import { Category } from './category.entity';

@Entity('activity_categories')
export class ActivityCategories {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ name: 'activity_id' })
  activityId: string;

  @Column({ name: 'category_id' })
  categoryId: string;

  @ManyToOne(() => Activity, (activities) => activities.activityCategories)
  @JoinColumn({ name: 'activity_id' })
  activities: Activity[];

  @ManyToOne(() => Activity, (categories) => categories.activityCategories)
  @JoinColumn({ name: 'category_id' })
  categories: Category[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
