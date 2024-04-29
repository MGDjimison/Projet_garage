import { Controle } from 'src/controle/controle.entity/controle.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Rapport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 1000 })
    contenu:string;

    @Column({ length: 1 })
    resultat: string

    @OneToOne(() => Controle)
    @JoinColumn()
    controle: Controle

    @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.rapports)
    utilisateur: Utilisateur
}
