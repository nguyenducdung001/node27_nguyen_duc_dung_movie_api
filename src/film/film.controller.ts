import { Controller, Get } from '@nestjs/common';
import { FilmService } from './film.service';
import { phimDto } from './dto/film.dto';
import { ConfigService } from '@nestjs/config';

@Controller('/film')
export class FilmController {
  constructor(
    private filmService: FilmService,
    private config: ConfigService,
  ) {}

  @Get()
  getFilm(): Promise<phimDto[]> {
    let data = this.config.get('MOVIE');
    // this.filmService.getFilm()
    return data;
  }
}
