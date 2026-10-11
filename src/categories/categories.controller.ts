import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { CreateCategoryDto } from './dto/create-ctg-dto.js';
import { UpdateCategoryDto } from './dto/update-ctg-dto.js';

@Controller('categories')
export class CategoriesController {
    //Menampilkan semua data category
    constructor(private readonly categoriesService: CategoriesService) {}
    
    //Menampilkan semua data kategori
    @Get()
    findAll() {
        return this.categoriesService.findAll(); 
    }

    //Menampilkan kategori berdasarkan id
    @Get(':id')
    findbyId(@Param('id') id: string) {
        return this.categoriesService.findbyId(parseInt(id));
    }

    //Menyimpan data kategori ke database
    @Post()
    create(@Body() inputCategory: CreateCategoryDto) {
        return this.categoriesService.create(inputCategory);
    }

    //Mengupdate data kategori berdasarkan id
    @Patch(':id')
    update(@Param('id') id: string, @Body() updatedCategory: UpdateCategoryDto) {
        return this.categoriesService.update(parseInt(id), updatedCategory);
    }

    //Menghapus data kategori berdasarkan id
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoriesService.remove(parseInt(id));
    }

}