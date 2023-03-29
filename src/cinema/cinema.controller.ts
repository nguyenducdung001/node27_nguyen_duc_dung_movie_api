import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HeThongRap } from '@prisma/client';
import { CinemaService } from './cinema.service';
import { cineSytDto } from './dto/cinema.dto';

@ApiTags('QuanLyRap')
@Controller('QuanLyRap')
export class CinemaController {
  constructor(private cinemaService: CinemaService) {}

  @Get('LayThongTinHeThongRap')
  async getCineSyt(): Promise<cineSytDto[]> {
    return await this.cinemaService.getCineSyt();
  }
}
