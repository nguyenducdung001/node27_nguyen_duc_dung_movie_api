import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { updateUserDto } from 'src/user/dto/user.dto';
import {
  bannerDto,
  createFilmDto,
  phimDto,
  updateFilmDto,
} from './dto/film.dto';

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

  async createFilm(newFilm: createFilmDto): Promise<createFilmDto> {
    let {
      ten_phim,
      trailer,
      hinh_anh,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    } = newFilm;
    let model = {
      ten_phim,
      trailer,
      hinh_anh,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    };
    let data = await this.prisma.phim.create({
      data: model,
    });
    return data;
  }

  async updateFilm(updateFilm: updateFilmDto, ma_phim: number): Promise<any> {
    let dataOne = await this.prisma.phim.findUnique({
      where: {
        ma_phim: ma_phim,
      },
    });

    if (dataOne) {
      let {
        ten_phim,
        trailer,
        hinh_anh,
        mo_ta,
        ngay_khoi_chieu,
        danh_gia,
        hot,
        dang_chieu,
        sap_chieu,
      } = updateFilm;
      let fimlEdit = {
        ten_phim,
        trailer,
        hinh_anh,
        mo_ta,
        ngay_khoi_chieu,
        danh_gia,
        hot,
        dang_chieu,
        sap_chieu,
      };

      let editData = await this.prisma.phim.update({
        data: fimlEdit,
        where: {
          ma_phim: ma_phim,
        },
      });

      return editData;
    }
    return dataOne;
  }

  async removeFilm(ma_phim: number) {
    let dataOne = await this.prisma.phim.findUnique({
      where: {
        ma_phim: ma_phim,
      },
    });

    if (dataOne) {
      let delFilm = await this.prisma.phim.delete({
        where: {
          ma_phim: ma_phim,
        },
      });

      return delFilm;
    }
  }
}

// yarn add prisma @prisma/client
// yarn prisma init
// yarn prisma db pull
// yarn prisma generate
