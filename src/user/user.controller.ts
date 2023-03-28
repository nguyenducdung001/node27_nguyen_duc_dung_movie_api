import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  getUserDto,
  updateUserDto,
  UserLoginDto,
  UserSignupDto,
} from './dto/user.dto';
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
  getListUser(): Promise<getUserDto[]> {
    return this.userService.getListUser();
  }

  @Put('CapNhatThongTinNguoiDung/:id')
  updateUser(
    @Body() updateUser: updateUserDto,
    @Param('id') id: string,
  ): Promise<any> {
    return this.userService.updateUser(updateUser, +id);
  }

  @Delete('XoaNguoiDung/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }
}
