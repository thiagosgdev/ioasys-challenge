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
import { v4 as uuidV4 } from 'uuid';
import { MessageType } from './messageType.entity';

@Entity('messages')
export class Message {
  @PrimaryColumn()
  id: string;

  @Column()
  text: string;

  @Column({ name: 'message_type_id' })
  messageTypeId: string;

  @ManyToOne(() => MessageType, (type) => type.messages)
  @JoinColumn({ name: 'message_type_id' })
  type: MessageType;

  @Column()
  active: boolean;

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
