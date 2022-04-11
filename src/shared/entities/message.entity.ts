import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { MessageType } from 'src/shared/entities/messageType.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
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
}
function PrimaryGeratedColumn() {
  throw new Error('Function not implemented.');
}
