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

import { Disability } from 'src/shared/entities/disability.entity';
import { Event } from 'src/shared/entities/event.entity';

@Entity('events_accessibilities')
export class EventAccessibility {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'event_id' })
  eventId: string;

  @Column({ name: 'disability_id' })
  disabilityId: string;

  @ManyToOne(() => Event, (event) => event.eventAccessibilities)
  @JoinColumn({ name: 'event_id' })
  events: Event[];

  @ManyToOne(() => Disability, (disability) => disability.eventAccessibilities)
  @JoinColumn({ name: 'disability_id' })
  accessibilities: Disability[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
