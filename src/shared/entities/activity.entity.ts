import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { ActivityCategories } from './activityCategories.entity';
import { UserInterest } from './userInterests.entity';

@Entity('activities')
export class Activity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @Column({ name: 'activity_category_id' })
  activityCategoryId: string;

  @OneToMany(
    () => ActivityCategories,
    (activityCategories) => activityCategories.activities,
  )
  activityCategories: ActivityCategories;

  @OneToMany(() => UserInterest, (userMoods) => userMoods.activities)
  userInterests: UserInterest[];

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
