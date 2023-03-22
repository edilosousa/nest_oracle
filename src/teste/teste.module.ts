/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { T1 } from './teste.entity';
import { TesteController } from './teste.controller';
import { TesteService } from './teste.service';

@Module({
  imports: [TypeOrmModule.forFeature([T1])],
  providers: [TesteService],
  controllers: [TesteController],
})
export class TesteModule {}