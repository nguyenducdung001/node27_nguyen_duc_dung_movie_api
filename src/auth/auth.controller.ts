import { Controller, Post, Body, Res } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserLoginDto, UserSignupDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() body: UserLoginDto): any {
    let user = body;
    return this.authService.login(user);
  }

  @Post('/signup')
  signup(@Body() body: UserSignupDto): any {
    let newUser = body;
    return this.authService.signup(newUser);
  }
}

// yarn add @nestjs/config @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt

// yarn add @nestjs/swagger swagger-ui-express
