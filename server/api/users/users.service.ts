import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.repository.save(await this.repository.create(createUserDto));
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.repository.findOne(id);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ email });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    await this.repository.update(id, updateUserDto);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
