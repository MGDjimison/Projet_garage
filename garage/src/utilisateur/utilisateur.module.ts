import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur.entity/utilisateur.entity';

@Module({
  providers: [UtilisateurService],
  controllers: [UtilisateurController],
  exports: [UtilisateurService],
  imports: [TypeOrmModule.forFeature([Utilisateur])]
})
export class UtilisateurModule {}
