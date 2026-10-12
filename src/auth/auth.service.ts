import {
    Injectable,
    ConflictException,
    UnauthorizedException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { User } from './entitis/user.entity.js';
import { RegisterDto } from './dto/register-dto.js';
import {LoginDto} from "./dto/login-dto.js";

@Injectable()
export class AuthService {
    private users: User[] = [];
    private nextId = 1;

    // Register: membuat akun baru
    async register(input: RegisterDto) {
        const existingUser = this.users.find(
            user => user.email === input.email,
        );

        if (existingUser) {
            throw new ConflictException('Email sudah terdaftar');
        }

        const hashedPassword = await bcrypt.hash(input.password, 10);

        const newUser: User = {
            id: this.nextId++,
            username: input.username,
            email: input.email,
            password: hashedPassword,
        };

        this.users.push(newUser);

        return {
            message: 'Registrasi berhasil',
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
            },
        };
    }

    // Login: memeriksa email dan password
    async login(input: LoginDto) {
        const user = this.users.find(
            user => user.email === input.email,
        );

        if (!user) {
            throw new UnauthorizedException(
                'Email atau password salah',
            );
        }

        const isPasswordValid = await bcrypt.compare(
            input.password,
            user.password,
        );

        if (!isPasswordValid) {
            throw new UnauthorizedException(
                'Email atau password salah',
            );
        }

        return {
            message: 'Login berhasil',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        };
    }
}