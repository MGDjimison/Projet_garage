import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Controle } from './controle.entity/controle.entity';

@Injectable()
export class ControleService {
    constructor(@InjectRepository(Controle) private controlesRepository: Repository<Controle>) { }

    async getControles(): Promise<Controle[]> {
        return await this.controlesRepository.find();
    }

    async getControle(_id: number): Promise<Controle> {
        return await this.controlesRepository.find({
            where: [{ "id": _id }]
        })[0];
    }

     async createControle(controle: Controle) {
        this.controlesRepository.save(controle)
    }


    async updateControle(controle: Controle) {
        this.controlesRepository.save(controle)
    }

    async deleteControle(controle: Controle) {
        this.controlesRepository.delete(controle);
    }
}
