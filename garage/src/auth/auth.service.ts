// import { Injectable } from '@nestjs/common';
// import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthService {
//     constructor(private utilisateurService: UtilisateurService,
//         private jwtService: JwtService
//     ) {}

//     async validateUser(username: string, password: string): Promise<any> {
//     // Implémentez la logique de validation de l'utilisateur
//     // Par exemple, vérifiez les identifiants dans une base de données
//     const user = await this.utilisateurService.findOne(username)
//     if (user && user.motDePasse === password) {
//       return user;
//     }
//     return null;
//   }

//   async login(user: any) {
//     const payload = { username: user.email, sub: user.id };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }

// }
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  
    constructor(
        private usersService: UtilisateurService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        const { motDePasse, ...result } = user;
        const isMatch = await bcrypt.compare(pass, user.motDePasse);
        if(isMatch){
            return result;
        }    
        return null;
    }

    async login(user: any) {
        const payload = { username: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}