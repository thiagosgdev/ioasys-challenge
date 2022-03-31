import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Event } from './event.entity';
import { UserInterest } from './userInterests.entity';
import { UserMood } from './userMoods.entity';

@Unique(['email'])
@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column({ select: false })
  password: string;

  @Column()
  phone: number;

  @Column({ name: 'emergency_name' })
  emergencyName: string;

  @Column({ name: 'emergency_phone' })
  emergencyPhone: number;

  @OneToMany(() => Event, (events) => events.users)
  events: Event[];

  @OneToMany(() => UserMood, (userMoods) => userMoods.user)
  userMoods: UserMood[];

  @OneToMany(() => UserInterest, (userInterests) => userInterests.users)
  userInterests: UserInterest[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
