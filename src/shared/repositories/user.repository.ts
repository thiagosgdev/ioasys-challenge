import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepo {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    if (!user) {
      return null;
    }
    return user;
  }
}
