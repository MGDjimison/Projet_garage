import { Injectable } from '@nestjs/common';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UtilisateurService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.motDePasse === pass) {
      const { motDePasse, ...result } = user;
      return result;
    }
    return null;
  }
}
