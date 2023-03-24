import { Controller, Get, Post } from '@nestjs/common';
import { FilmService } from './film.service';
import { phimDto } from './dto/film.dto';
import { ConfigService } from '@nestjs/config';
import {
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger/dist';
import { FileUploadDto } from './dto/upload.dto';

@ApiTags('QuanLyPhim')
@Controller('/QuanLyPhim')
export class FilmController {
  constructor(
    private filmService: FilmService,
    private config: ConfigService,
  ) {}

  //  Lấy danh sách phim
  // @UseGuards(AuthGuard('token'))
  @Get('LayDanhSachPhim')
  layDanhSachPhim(): Promise<phimDto[]> {
    return this.filmService.layDanhSachPhim();
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: process.cwd() + '/public/img',
        filename(req, file, callback) {
          return callback(null, Date.now() + '_' + file.originalname);
        },
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of cats',
    type: FileUploadDto,
  })
  upload(@UploadedFile() file: Express.Multer.File): Express.Multer.File {
    return file;
  }
}

// yarn add @types/multer
