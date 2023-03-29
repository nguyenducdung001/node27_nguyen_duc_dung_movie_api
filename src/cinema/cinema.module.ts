import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CinemaController } from './cinema.controller';
import { CinemaService } from './cinema.service';

@Module({
  imports: [ConfigModule],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}

// nest g module cinema
// nest g controller cinema --no-spec
// nest g service cinema --no-spec
