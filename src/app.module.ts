import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FilmModule } from './film/film.module';

@Module({
  imports: [UserModule, FilmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
