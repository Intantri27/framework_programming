import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @IsNotEmpty({message: "Email harus diisi"})
    @IsString({message: "Email harus berupa string"})
    readonly email: string;

    @IsNotEmpty({message: "Password harus diisi"})
    @IsString({message: "Password harus berupa string"})
    readonly password: string;
}