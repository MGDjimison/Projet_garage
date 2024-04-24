import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { VehiculeController } from './vehicule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicule } from './vehicule.entity/vehicule.entity';

@Module({
  providers: [VehiculeService],
  controllers: [VehiculeController],
  exports: [VehiculeService],
  imports: [TypeOrmModule.forFeature([Vehicule])]

})
export class VehiculeModule {}
