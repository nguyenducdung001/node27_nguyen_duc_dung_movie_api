import { Controller, Post, Body, Get, Put } from '@nestjs/common';
import { getUserDto, UserLoginDto, UserSignupDto } from './dto/user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags('QuanLyNguoiDung')
@Controller('QuanLyNguoiDung')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/DangNhap')
  login(@Body() body: UserLoginDto): any {
    let user = body;
    return this.userService.login(user);
  }

  @Post('/DangKy')
  signup(@Body() body: UserSignupDto): any {
    let newUser = body;
    return this.userService.signup(newUser);
  }

  @Get('LayDanhSachNguoiDung')
  layDanhSachNguoiDung(): Promise<getUserDto[]> {
    return this.userService.layDanhSachNguoiDung();
  }

  @Put('CapNhatThongTinNguoiDung')
  capNhatThongTinNguoiDung(body: getUserDto): Promise<getUserDto> {
    let updateUser = body;
    return this.userService.capNhatThongTinNguoiDung(updateUser);
  }
}
