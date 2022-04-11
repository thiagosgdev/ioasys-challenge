import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { EventAccessibility } from 'src/shared/entities/eventAccessibility.entity';
import { UserDisability } from 'src/shared/entities/userDisability.entity';

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
    (eventDisabilities) => eventDisabilities.disabilities,
  )
  eventDisabilities: EventAccessibility;

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
