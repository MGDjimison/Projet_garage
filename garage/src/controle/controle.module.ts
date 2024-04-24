import { Module } from '@nestjs/common';
import { ControleService } from './controle.service';
import { ControleController } from './controle.controller';
import { Controle } from './controle.entity/controle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ControleService],
  controllers: [ControleController],
  exports: [ControleService],
  imports: [(TypeOrmModule.forFeature([Controle]))]
})
export class ControleModule {}
