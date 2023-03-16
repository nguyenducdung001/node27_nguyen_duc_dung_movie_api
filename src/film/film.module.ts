import { Module } from '@nestjs/common';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}

// nest g module film
// nest g controller film --no-spec
// nest g service film --no-spec
