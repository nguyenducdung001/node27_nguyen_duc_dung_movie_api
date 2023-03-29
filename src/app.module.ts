import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FilmModule } from './film/film.module';
import { ConfigModule } from '@nestjs/config';
import { TicketModule } from './ticket/ticket.module';
import { CinemaModule } from './cinema/cinema.module';

@Module({
  imports: [
    UserModule,
    FilmModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TicketModule,
    CinemaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
