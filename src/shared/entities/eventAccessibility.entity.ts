import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Disability } from './disability.entity';
import { Event } from './event.entity';

@Entity('events_accessibilities')
export class EventAccessibility {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'event_id' })
  eventId: string;

  @Column({ name: 'disability_id' })
  disabilityId: string;

  //  @ManyToOne(() => Event, (event) => event.eventAccessibilities)
  //  @JoinColumn({ name: 'event_id' })
  //  events: Event[];

  @ManyToOne(() => Disability, (disability) => disability.eventDisabilities)
  @JoinColumn({ name: 'disability_id' })
  disabilities: Disability[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
