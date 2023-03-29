import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { FilmService } from './film.service';
import {
  bannerDto,
  phimDto,
  createFilmDto,
  updateFilmDto,
} from './dto/film.dto';
import { ConfigService } from '@nestjs/config';
import {
  Delete,
  Param,
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
  getListFilm(): Promise<phimDto[]> {
    return this.filmService.getListFilm();
  }

  // Lấy danh sách banner
  @Get('LayDanhSachBanner')
  getListBanner(): Promise<bannerDto[]> {
    return this.filmService.getListBanner();
  }

  // Thêm phim
  @Post('ThemPhim')
  createFilm(@Body() newFilm: createFilmDto): Promise<createFilmDto> {
    return this.filmService.createFilm(newFilm);
  }

  // Cập nhật phim
  @Put('CapNhatPhim/:ma_phim')
  updateFilm(
    @Body() updateFilm: updateFilmDto,
    @Param('ma_phim') ma_phim: string,
  ): Promise<any> {
    return this.filmService.updateFilm(updateFilm, +ma_phim);
  }

  // Xoá phim
  @Delete('XoaPhim/:ma_phim')
  removeFilm(@Param('ma_phim') ma_phim: string) {
    return this.filmService.removeFilm(+ma_phim);
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
