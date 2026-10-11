import { Controller, Get, Param, Post, Body, Patch, Delete} from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book-dto.js';
import { UpdateBookDto } from './dto/update-book-dto.js';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    //Menampilkan semua data buku
    @Get()
    findAll() {
        return this.booksService.findAll(); 
    }

    //Menampilkan buku berdasarkan id
    @Get(':id')
    findbyId(@Param('id') id: string) {
        return this.booksService.findbyId(parseInt(id));
    }

    //Menyimpan data buku ke database
    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    //Mengupdate data buku berdasarkan id
    @Patch(':id')
    update(@Param('id') id: string, @Body() updatedBook: UpdateBookDto) {
        return this.booksService.update(parseInt(id), updatedBook);
    }

    //Menghapus data buku berdasarkan id
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.booksService.remove(parseInt(id));
    }
}
