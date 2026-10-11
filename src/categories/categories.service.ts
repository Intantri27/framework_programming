import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity.js';
import { CreateCategoryDto } from './dto/create-ctg-dto.js';

@Injectable()
export class CategoriesService {
    private categories: Category[] = [
            {
                id: 1,
                name: "Fiction",
            },
            {
                id: 2,
                name: "Science Fiction",
            }
        ];

        //Menampilkan semua data buku
        findAll(): Category[] {
            return this.categories
        }
    
        //Menyimpan data ke database
        create(inputCategory: CreateCategoryDto) : Category{
            const newCategory: Category = {
                id: this.categories.length + 1,
                name: inputCategory.name,
            };
            this.categories.push(newCategory);
            return newCategory;
        }
    
        //Menampilkan data kategori berdasarkan id
            findbyId(id: number): Category | undefined {
                return this.categories.find(category => category.id === id);
            }
    
        //Mengupdate data kategori berdasarkan id
        update(id: number, updatedCategory: Partial<Category>): Category | undefined {
            const categoryIndex = this.categories.findIndex(category => category.id === id);
            if (categoryIndex !== -1) {
                const category = this.categories[categoryIndex];
                const updatedCategoryData = { ...category, ...updatedCategory };
                this.categories[categoryIndex] = updatedCategoryData;
                return updatedCategoryData;
            }
            return undefined;
        }
        //Menghapus data kategori berdasarkan id
        remove(id: number): boolean {
            const categoryIndex = this.categories.findIndex(category => category.id === id);
            if (categoryIndex !== -1) {
                this.categories.splice(categoryIndex, 1);
                return true;
            }
            this.categories.splice(categoryIndex, 1);
            return false;
        }
}