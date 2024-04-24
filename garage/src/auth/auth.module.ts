import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurController } from 'src/utilisateur/utilisateur.controller';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur])],
  providers: [UtilisateurService],
  controllers: [UtilisateurController],
  exports: [UtilisateurService],
})
export class UsersModule {}