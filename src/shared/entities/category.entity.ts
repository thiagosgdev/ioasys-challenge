import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { ActivityCategories } from 'src/shared/entities/activityCategories.entity';

@Entity('categories')
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @OneToMany(
    () => ActivityCategories,
    (activityCategories) => activityCategories.categories,
  )
  activityCategories: ActivityCategories;

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
