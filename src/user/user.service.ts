import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { PrismaClient } from '@prisma/client';
import {
  UserLoginDto,
  UserSignupDto,
  getUserDto,
  updateUserDto,
} from './dto/user.dto';

const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(private config: ConfigService, private jwt: JwtService) {}

  private prisma = new PrismaClient();

  async login(user: UserLoginDto): Promise<String> {
    let { email, mat_khau } = user;

    let checkUser = await this.prisma.nguoiDung.findUnique({
      where: {
        email,
      },
    });
    if (checkUser) {
      let checkPass = bcrypt.compareSync(mat_khau, checkUser.mat_khau);
      if (checkPass) {
        let token = this.jwt.sign(
          { data: checkUser },
          { secret: this.config.get('SECRET_KEY'), expiresIn: '10m' },
        );
        return token;
      }
    }
  }

  async signup(newUser: UserSignupDto): Promise<UserSignupDto> {
    let { ho_ten, email, so_dt, mat_khau, loai_nguoi_dung } = newUser;
    let model = {
      ho_ten,
      email,
      so_dt,
      mat_khau: bcrypt.hashSync(mat_khau, 10),
      loai_nguoi_dung,
    };
    let data = await this.prisma.nguoiDung.create({
      data: model,
    });
    return data;
  }

  async getListUser(): Promise<getUserDto[]> {
    let data = this.prisma.nguoiDung.findMany();
    return data;
  }

  async updateUser(updateUser: updateUserDto, tai_khoan: number): Promise<any> {
    let dataOne = await this.prisma.nguoiDung.findUnique({
      where: {
        tai_khoan: tai_khoan,
      },
    });
    if (dataOne) {
      let { ho_ten, email, so_dt, mat_khau, loai_nguoi_dung } = updateUser;
      let userEdit = {
        ho_ten,
        email,
        so_dt,
        mat_khau,
        loai_nguoi_dung,
      };
      let editData = await this.prisma.nguoiDung.update({
        data: userEdit,
        where: {
          tai_khoan: tai_khoan,
        },
      });
      return editData;
    }
    return dataOne;
  }
}
