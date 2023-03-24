import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { phimDto } from './dto/film.dto';

@Injectable()
export class FilmService {
  prisma: PrismaClient = new PrismaClient();

  layDanhSachPhim(): Promise<phimDto[]> {
    let data = this.prisma.phim.findMany();
    return data;
  }
}

// yarn add prisma @prisma/client
// yarn prisma init
// yarn prisma db pull
// yarn prisma generate
