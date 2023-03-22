import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'reflect-metadata';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
// import { T1 } from './teste/teste.entity';
// import { TesteModule } from './teste/teste.module';
import { GE484 } from './suprimentos/suprimento.entity';
import { SuprimentoModule } from './suprimentos/suprimento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: '10.58.0.192',
      port: 1521,
      username: 'master',
      password: 'bcibracbrmaster',
      serviceName: 'ACBR',
      entities: [GE484],
      synchronize: false,
    }),
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: '10.58.66.181',
      port: 1521,
      username: 'master',
      password: 'bcibracbsmaster',
      serviceName: 'ACBS',
      entities: [],
      synchronize: false,
    }),
    SuprimentoModule,
  ],
  controllers: [AppController, DatabaseController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
