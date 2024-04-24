import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';

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


    async updateUtilisateur(utilisateur: Utilisateur) {
        this.utilisateursRepository.save(utilisateur)
    }

    async deleteUtilisateur(utilisateur: Utilisateur) {
        this.utilisateursRepository.delete(utilisateur);
    }

    async findOne(username: string) {
        return await this.utilisateursRepository.findOneBy({email:username});
    }

}
