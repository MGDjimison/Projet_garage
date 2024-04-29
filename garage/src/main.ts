import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
// return this.get.http(url, exemple: http://localhost:3000/utilisateur) dans user.service.ts
//add ng model a la fin de chq chaamp input de form
//<input type=text
bootstrap();
