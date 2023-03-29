import { Body, Controller, Post } from '@nestjs/common';
import { TicketService } from './ticket.service';

import { ApiTags } from '@nestjs/swagger';
import { createShowTimesDto } from './dto/ticket.dto';
import { LichChieu } from '@prisma/client';

@ApiTags('QuanLyDatVe')
@Controller('QuanLyDatVe')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Post('TaoLichChieu')
  createShowTimes(@Body() newShowTime: LichChieu): Promise<LichChieu> {
    return this.ticketService.createShowTimes(newShowTime);
  }
}
