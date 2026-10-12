import { IsNotEmpty, IsString, isString } from "class-validator";

export class CreateBookDto{
    
    @IsNotEmpty({message: "Judul harus diisi"})
    @IsString({message: "Judul harus berupa string"})
    readonly title: string;
    
    @IsNotEmpty({message: "Author harus diisi"})
    @IsString({message: "Author harus berupa string"})
    readonly author: string;

    @IsNotEmpty({message: "ISBN harus diisi"})
    @IsString({message: "ISBN harus berupa string"})
    readonly isbn: string;

    @IsNotEmpty({message: "Tahun terbit harus diisi"})
    @IsString({message: "Tahun terbit harus berupa string"})
    readonly publishedYear: number;

    @IsNotEmpty({message: "Status ketersediaan harus diisi"})
    @IsString({message: "Status ketersediaan harus berupa string"})
    readonly isAvailable: boolean;
}