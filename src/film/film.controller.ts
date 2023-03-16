import { Controller, Get } from '@nestjs/common';
import { FilmService } from './film.service';
import { phimDto } from './dto/film.dto';

@Controller('/film')
export class FilmController {
  constructor(private filmService: FilmService) {}

  @Get()
  getFilm(): Promise<phimDto[]> {
    return this.filmService.getFilm();
  }
}
