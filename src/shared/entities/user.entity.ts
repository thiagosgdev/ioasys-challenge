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

import { Event } from 'src/shared/entities/event.entity';
import { UserInterest } from 'src/shared/entities/userInterests.entity';
import { UserMood } from 'src/shared/entities/userMoods.entity';
import { UserDisability } from 'src/shared/entities/userDisability.entity';

@Unique(['email'])
@Entity('users')
export class User {
  @PrimaryColumn()
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
  phone: string;

  @Column({ name: 'is_admin' })
  isAdmin: string;

  @Column({ name: 'is_premium' })
  isPremium: boolean;

  @Column({ name: 'emergency_name' })
  emergencyName: string;

  @Column({ name: 'emergency_phone' })
  emergencyPhone: string;

  @OneToMany(() => Event, (events) => events.users)
  events: Event[];

  @OneToMany(() => UserMood, (userMoods) => userMoods.user)
  userMoods: UserMood[];

  @OneToMany(() => UserInterest, (userInterests) => userInterests.users)
  userInterests: UserInterest[];

  @OneToMany(() => UserDisability, (userDisabilities) => userDisabilities.users)
  userDisabilities: UserDisability[];

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
