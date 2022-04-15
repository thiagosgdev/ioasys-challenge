import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

import { Event } from './event.entity';
import { UserInterest } from './userInterests.entity';
import { UserMood } from './userMoods.entity';
import { UserDisability } from './userDisability.entity';
import { Attendee } from './attendees.entity';

@Unique(['email'])
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ name: 'about_me' })
  aboutMe: string;

  @Column()
  city: string;

  @Column()
  phone: string;

  @Column({ name: 'is_admin' })
  isAdmin: boolean;

  @Column({ name: 'is_premium' })
  isPremium: boolean;

  @Column({ name: 'emergency_name' })
  emergencyName: string;

  @Column({ name: 'emergency_phone' })
  emergencyPhone: string;

  @OneToMany(() => Attendee, (attendees) => attendees.users)
  attendees?: Attendee[];

  @OneToMany(() => Event, (events) => events.users)
  events?: Event[];

  @OneToMany(() => UserMood, (userMoods) => userMoods.user)
  userMoods?: UserMood[];

  @OneToMany(() => UserInterest, (userInterests) => userInterests.users)
  userInterests?: UserInterest[];

  @OneToMany(() => UserDisability, (userDisabilities) => userDisabilities.users)
  userDisabilities?: UserDisability[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
