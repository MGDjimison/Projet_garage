import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';

@Controller('utilisateur')
export class UtilisateurController {
    constructor(private service: UtilisateurService) { }


    @Get()
    getAll(@Param() params) {
        return this.service.getUtilisateurs();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUtilisateur(params.id);
    }

    @Post()
    create(@Body() utilisateur: Utilisateur) {
        return this.service.createUtilisateur(utilisateur);
    }

    @Put()
    update(@Body() utilisateur: Utilisateur) {
        return this.service.updateUtilisateur(utilisateur);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteUtilisateur(params.id);
    }
}
