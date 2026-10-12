import { Controller, Post, Body } from '@nestjs/common';
import { User } from './entitis/user.entity.js';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register-dto.js';
import { LoginDto } from './dto/login-dto.js';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // Endpoint register
    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    // Endpoint login
    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}