import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { VehiculeService } from './vehicule.service';
import { Vehicule } from './vehicule.entity/vehicule.entity';

@Controller('vehicule')
export class VehiculeController {
    
    constructor(private service: VehiculeService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getVehicules();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getVehicule(params.id);
    }

    @Post()
    create(@Body() vehicule: Vehicule) {
        return this.service.createVehicule(vehicule);
    }

    @Put()
    update(@Body() vehicule: Vehicule) {
        return this.service.updateVehicule(vehicule);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteVehicule(params.id);
    }
}
