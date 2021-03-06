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

import { User } from './user.entity';
import { Disability } from './disability.entity';

@Entity('users_disabilities')
export class UserDisability {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'disability_id' })
  disabilityId: string;

  @ManyToOne(() => User, (user) => user.userDisabilities)
  @JoinColumn({ name: 'user_id' })
  users: User[];

  @ManyToOne(() => Disability, (disability) => disability.userDisabilities)
  @JoinColumn({ name: 'disability_id' })
  disabilities: Disability[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
