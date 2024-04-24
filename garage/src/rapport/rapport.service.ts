import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rapport } from './rapport.entity/rapport.entity';

@Injectable()
export class RapportService {
    constructor(@InjectRepository(Rapport) private rapportsRepository: Repository<Rapport>) { }

    async getRapports(): Promise<Rapport[]> {
        return await this.rapportsRepository.find();
    }

    async getRapport(_id: number): Promise<Rapport> {
        return await this.rapportsRepository.find({
            where: [{ "id": _id }]
        })[0];
    }

     async createRapport(rapport: Rapport) {
        this.rapportsRepository.save(rapport)
    }


    async updateRpport(rapport: Rapport) {
        this.rapportsRepository.save(rapport)
    }

    async deleteRapport(rapport: Rapport) {
        this.rapportsRepository.delete(rapport);
    }
}
