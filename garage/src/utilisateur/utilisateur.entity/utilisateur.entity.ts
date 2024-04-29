import { Rapport } from 'src/rapport/rapport.entity/rapport.entity';
import { Vehicule } from 'src/vehicule/vehicule.entity/vehicule.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Utilisateur {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    nom:string;

    @Column({ length: 45 })
    prenom:string;

    @Column({ length: 45 })
    username:string;

    @Column({ length: 200 })
    motDePasse:string;

    @Column({ length: 45 })
    role:string;

    @OneToMany(() => Rapport, (rapport) => rapport.utilisateur)
    rapports: Rapport[]

    @OneToMany(() => Vehicule, (vehicule) => vehicule.utilisateur)
    vehicules: Vehicule[]
}
