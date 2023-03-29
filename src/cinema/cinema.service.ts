import { Injectable } from '@nestjs/common';
import { HeThongRap, PrismaClient } from '@prisma/client';
import { cineSytDto } from './dto/cinema.dto';

@Injectable()
export class CinemaService {
  prisma: PrismaClient = new PrismaClient();

  async getCineSyt(): Promise<cineSytDto[]> {
    let data = await this.prisma.heThongRap.findMany({
      select: {
        ma_he_thong_rap: true,
        ten_he_thong_rap: true,
        logo: true,
      },
    });
    return data;
  }
}
