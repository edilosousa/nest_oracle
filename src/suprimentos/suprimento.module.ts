/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GE484 } from './suprimento.entity';
import { SuprimentoController } from './suprimento.controller';
import { SuprimentoService } from './suprimento.service';

@Module({
  imports: [TypeOrmModule.forFeature([GE484])],
  providers: [SuprimentoService],
  controllers: [SuprimentoController],
})
export class SuprimentoModule {}