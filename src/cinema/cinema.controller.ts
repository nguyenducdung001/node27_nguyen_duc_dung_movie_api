import { Controller, Get, Param, Query, Headers } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HeThongRap } from '@prisma/client';

import { CinemaService } from './cinema.service';
import { cineSytDto, theaterClusDto } from './dto/cinema.dto';

@ApiTags('QuanLyRap')
@Controller('QuanLyRap')
export class CinemaController {
  constructor(private cinemaService: CinemaService) {}

  @Get('LayThongTinHeThongRap')
  async getCineSyt(): Promise<cineSytDto[]> {
    return await this.cinemaService.getCineSyt();
  }

  @Get('LayThongTinCumRapTheoHeThong')
  async getTheaterCluster(@Query('ma_he_thong_rap') ma_he_thong_rap: string) {
    return await this.cinemaService.getTheaterCluster(ma_he_thong_rap);
  }
}
