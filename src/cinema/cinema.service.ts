import { Injectable } from '@nestjs/common';
import { HeThongRap, PrismaClient } from '@prisma/client';
import { cineSytDto, theaterClusDto } from './dto/cinema.dto';

@Injectable()
export class CinemaService {
  prisma: PrismaClient = new PrismaClient();

  // Lấy thông tin hệ thống rạp
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

  // Lấy thông tin cụm rạp theo hệ thống
  async getTheaterCluster(ma_he_thong_rap): Promise<theaterClusDto[]> {
    let dataOne = await this.prisma.heThongRap.findUnique({
      where: {
        ma_he_thong_rap: ma_he_thong_rap,
      },
    });
    if (dataOne) {
      let data = await this.prisma.cumRap.findMany({
        select: {
          ma_cum_rap: true,
          ten_cum_rap: true,
          dia_chi: true,
          ma_he_thong_rap: true,
        },
        where: {
          ma_he_thong_rap: ma_he_thong_rap,
        },
      });
      return data;
    }
  }
}
