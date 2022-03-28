import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Message } from 'src/shared/entities/message.entity';
import { v4 as uuidV4 } from 'uuid';

@Entity('messages_types')
export class MessageType {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @OneToMany(() => Message, (messages) => messages.type)
  messages: Message[];

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
