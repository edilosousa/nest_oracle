import { Controller, Get, Query } from '@nestjs/common';
import { GE484 } from './suprimento.entity';
import { SuprimentoService } from './suprimento.service';

@Controller('suprimento')
export class SuprimentoController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly suprimentoService: SuprimentoService, ){}

  @Get()
  findOne(@Query('id') id: string) {
    return this.suprimentoService.findOne(id);
  }

  @Get('listarTodos')
  findAll(): Promise<GE484[]> {
    return this.suprimentoService.findAll();
  }
}
