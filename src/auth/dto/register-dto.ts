import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
    @IsNotEmpty({message: "Username harus diisi"})
    @IsString({message: "Username harus berupa string"})
    readonly username: string;

    @IsNotEmpty({message: "Email harus diisi"})
    @IsString({message: "Format email tidak valid"})
    readonly email: string;

    @IsNotEmpty({message: "Password harus diisi"})
    @IsString({message: "Password harus berupa string"})
    readonly password: string;
}