//import { Controle } from 'src/controle/controle.entity/controle.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';
import { Column, PrimaryGeneratedColumn, OneToMany, Entity, ManyToOne } from 'typeorm';
import {Controle} from "../../controle/controle.entity/controle.entity";

@Entity()
export class Vehicule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    marque:string;

    @Column({ length: 45 })
    modele:string;

    @Column()
    annee:number;

    @Column({ length: 200 })
    immatriculation:string;

    @OneToMany(() => Controle, (controle) => controle.vehicule)
    controles: Controle[]

    @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.vehicules)
    utilisateur: Utilisateur
    
}
