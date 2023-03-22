/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { T1 } from './teste.entity';

@Injectable()
export class TesteService {
  constructor(
    @InjectRepository(T1)
    private readonly t1Repository: Repository<T1>,
    ) {}

    async findAll(): Promise<T1[]> {
        return this.t1Repository.find();
    }
}
