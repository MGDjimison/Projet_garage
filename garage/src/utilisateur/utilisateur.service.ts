import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';
const bcrypt = require('bcrypt');

@Injectable()
export class UtilisateurService {
    constructor(@InjectRepository(Utilisateur) private utilisateursRepository: Repository<Utilisateur>) { }

    async getUtilisateurs(): Promise<Utilisateur[]> {
        return await this.utilisateursRepository.find();
    }

    async getUtilisateur(_id: number): Promise<Utilisateur> {
        return await this.utilisateursRepository.find({
            where: [{ "id": _id }]
        })[0];
    }

     async createUtilisateur(utilisateur: Utilisateur) {
        this.utilisateursRepository.save(utilisateur)
    }

    // async updateUtilisateur(utilisateur: Utilisateur) {
    //     this.utilisateursRepository.save(utilisateur)
    // }

    async updateUtilisateur(user: Utilisateur) {
        if(user.motDePasse) {
            const password= user.motDePasse;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.motDePasse = hash;
        }
        return await this.utilisateursRepository.update(user.id, user);
    }

    async deleteUtilisateur(utilisateur: Utilisateur) {
        this.utilisateursRepository.delete(utilisateur);
    }

    async findOne(_username: string) {
        return await this.utilisateursRepository.findOneBy({username:_username});
    }

}
