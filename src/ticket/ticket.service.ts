import { Injectable } from '@nestjs/common';
import { LichChieu, PrismaClient } from '@prisma/client';

import { createShowTimesDto } from './dto/ticket.dto';

@Injectable()
export class TicketService {
  private prisma: PrismaClient = new PrismaClient();

  // Tạo lịch chiếu
  createShowTimes(newShowTime: LichChieu): Promise<LichChieu> {
    let { ma_rap, ma_phim, ngay_gio_chieu, gia_ve } = newShowTime;
    let model = {
      ma_rap,
      ma_phim,
      ngay_gio_chieu,
      gia_ve,
    };
    let data = this.prisma.lichChieu.create({
      data: model,
    });
    return data;
  }
}
