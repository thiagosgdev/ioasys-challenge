import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EventAccessibility } from './eventAccessibility.entity';
import { UserDisability } from './userDisability.entity';

@Entity('disabilities')
export class Disability {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  active: boolean;

  @OneToMany(
    () => UserDisability,
    (userDisabilities) => userDisabilities.disabilities,
  )
  userDisabilities: UserDisability[];

  @OneToMany(
    () => EventAccessibility,
    (eventAccessibilities) => eventAccessibilities.accessibilities,
  )
  eventAccessibilities: EventAccessibility;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
