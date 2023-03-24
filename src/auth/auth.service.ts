import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserSignupDto, UserLoginDto } from './dto/auth.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt/dist';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
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
      data: model
    });
    return data;
 
  }
}
