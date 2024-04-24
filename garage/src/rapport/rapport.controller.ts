import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { RapportService } from './rapport.service';
import { Rapport } from './rapport.entity/rapport.entity';

@Controller('rapport')
export class RapportController {
    constructor(private service: RapportService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getRapports();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getRapport(params.id);
    }

    @Post()
    create(@Body() rapport: Rapport) {
        return this.service.createRapport(rapport);
    }

    @Put()
    update(@Body() rapport: Rapport) {
        return this.service.updateRpport(rapport);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteRapport(params.id);
    }
}
