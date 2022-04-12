import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Activity } from './activity.entity';
import { User } from './user.entity';
import { EventAccessibility } from './eventAccessibility.entity';
import { Attendee } from './attendees.entity';
import { Address } from './address.entity';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column({ name: 'is_pet_friendly' })
  isPetFriendly: boolean;

  @Column({ name: 'max_participants' })
  maxParticipants: number;

  @Column({ name: 'start_time' })
  startTime: string;

  @Column()
  price: number;

  @Column({ name: 'is_promoted' })
  isPromoted: boolean;

  @Column({ name: 'activity_id' })
  activityId: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'user_identity' })
  userIdentity: string;

  @Column({ name: 'is_online' })
  isOnline: boolean;

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.events)
  @JoinColumn({ name: 'user_id' })
  users: User[];

  @ManyToOne(() => Activity, (activities) => activities.events)
  @JoinColumn({ name: 'activity_id' })
  activities: Activity[];

  @OneToMany(() => Address, (addresses) => addresses.events)
  addresses: Address;

  @OneToMany(() => Attendee, (attendees) => attendees.event)
  @JoinColumn({ name: 'id' })
  attendees: Attendee[];

  @OneToMany(
    () => EventAccessibility,
    (eventAccessibilities) => eventAccessibilities.events,
  )
  @JoinColumn({ name: 'event_id' })
  eventAccessibilities: EventAccessibility[];

  numParticipants?: number;

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
