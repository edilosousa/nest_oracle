/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { T1 } from './teste.entity';
import { TesteService } from './teste.service';

@Controller('teste')
export class TesteController {
    constructor(private readonly testeService: TesteService, ) {}

    @Get()
    findAll(): Promise<T1[]> {
        return this.testeService.findAll();
    }
    

}
