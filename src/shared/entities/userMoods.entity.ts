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

import { Mood } from 'src/shared/entities/mood.entity';
import { User } from 'src/shared/entities/user.entity';

@Entity('users_moods')
export class UserMood {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'mood_id' })
  moodId: string;

  @ManyToOne(() => User, (user) => user.userMoods)
  @JoinColumn({ name: 'user_id' })
  user: User[];

  @ManyToOne(() => Mood, (moods) => moods.userMoods)
  @JoinColumn({ name: 'mood_id' })
  mood: Mood[];

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
