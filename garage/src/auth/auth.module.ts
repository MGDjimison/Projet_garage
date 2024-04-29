import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';

@Module({
  imports: [UtilisateurModule, PassportModule,
            JwtModule.register({
              secret: jwtConstants.secret,
              signOptions: { expiresIn: '60s' },
            })],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
  controllers: [AuthController]

})
export class AuthModule {}