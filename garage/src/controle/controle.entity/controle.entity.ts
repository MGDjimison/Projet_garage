import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Vehicule } from 'src/vehicule/vehicule.entity/vehicule.entity';

@Entity()
export class Controle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    dateControle:string;

    @Column({ length: 45 })
    heureControle:string;

    @Column({type: 'decimal', precision: 10, scale: 2, default: 55})
    prix: number;

    @ManyToOne(() => Vehicule, (vehicule) => vehicule.controles)
    vehicule: Vehicule

}
