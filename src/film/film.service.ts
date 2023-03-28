import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { bannerDto, phimDto } from './dto/film.dto';

@Injectable()
export class FilmService {
  prisma: PrismaClient = new PrismaClient();

  getListFilm(): Promise<phimDto[]> {
    let data = this.prisma.phim.findMany();
    return data;
  }

  getListBanner(): Promise<bannerDto[]> {
    let data = this.prisma.banner.findMany();
    return data;
  }
}

// yarn add prisma @prisma/client
// yarn prisma init
// yarn prisma db pull
// yarn prisma generate
