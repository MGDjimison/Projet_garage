import { Module } from '@nestjs/common';
import { RapportService } from './rapport.service';
import { RapportController } from './rapport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rapport } from './rapport.entity/rapport.entity';

@Module({
  providers: [RapportService],
  controllers: [RapportController],
  exports: [RapportService],
  imports: [(TypeOrmModule.forFeature([Rapport]))]
})
export class RapportModule {}
