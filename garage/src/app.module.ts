import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ControleModule } from './controle/controle.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { RapportModule } from './rapport/rapport.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "garage",
    "entities": ["dist//**/**.entity{.ts,.js}"],
    "synchronize": true}), UtilisateurModule, ControleModule, VehiculeModule, RapportModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
