import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ControleService } from './controle.service';
import { Controle } from './controle.entity/controle.entity';

@Controller('controle')
export class ControleController {
    constructor(private service: ControleService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getControles();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getControle(params.id);
    }

    @Post()
    create(@Body() controle: Controle) {
        return this.service.createControle(controle);
    }

    @Put()
    update(@Body() controle: Controle) {
        return this.service.updateControle(controle);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteControle(params.id);
    }
}
