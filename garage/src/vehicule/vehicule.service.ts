import { Injectable } from '@nestjs/common';
import { Vehicule } from './vehicule.entity/vehicule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculeService {
    constructor(@InjectRepository(Vehicule) private vehiculesRepository: Repository<Vehicule>) { }

    async getVehicules(): Promise<Vehicule[]> {
        return await this.vehiculesRepository.find();
    }

    async getVehicule(_id: number): Promise<Vehicule> {
        return await this.vehiculesRepository.find({
            where: [{ "id": _id }]
        })[0];
    } 

     async createVehicule(vehicule: Vehicule) {
        this.vehiculesRepository.save(vehicule)
    }


    async updateVehicule(vehicule: Vehicule) {
        this.vehiculesRepository.save(vehicule)
    }

    async deleteVehicule(vehicule: Vehicule) {
        this.vehiculesRepository.delete(vehicule);
    }

    async findByUser(_id: number) {
        return this.vehiculesRepository.findBy({ 
            utilisateur: {id: _id}
        });
    }
}
