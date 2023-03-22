/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GE484 } from './suprimento.entity';

@Injectable()
export class SuprimentoService {
  constructor(
    @InjectRepository(GE484)
    private readonly ge484Repository: Repository<GE484>,
  ) { }
  async findAll(): Promise<GE484[]> {
    return this.ge484Repository.find();
  }
  async findOne(id: string): Promise<GE484[]> {
    // async findOne(id: string) {
    // eslint-disable-next-line prettier/prettier
    return await this.ge484Repository.find({ where: { num_recebimento: id } });
    // return await this.ge484Repository.createQueryBuilder()
    //   .select("ge484.dat_recebimento")
    //   .from("GE484","ge484")
    //   .where("ge484.num_recebimento = :id", { id })
    //   .getOne()
  }

 
}
