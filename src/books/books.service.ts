import { Injectable } from '@nestjs/common';
import { Book } from './entitis/book.entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()
export class BooksService {
    private books: Book[] = [
        {
            id: 1,
            title: "Pada zaman dahulu",
            author: "Tok dalang",
            isbn: "1234567",
            publishedYear: 2024,
            isAvailable: true
        },
        {
            id: 2,
            title: "Lorem ipsum",
            author: "Dolor",
            isbn: "1234568",
            publishedYear: 1989,
            isAvailable: false
        }
    ];
    //Menampilkan semua data buku
    findAll(): Book[] {
        return this.books
    }

    //Menyimpan data ke database
    create(inputBook:CreateBookDto) : Book{
        const newBook: Book = {
            id: this.books.length + 1,
            title: inputBook.title,
            author: inputBook.author,
            isbn: inputBook.isbn,
            publishedYear: inputBook.publishedYear,
            isAvailable: true
        };
        this.books.push(newBook);
        return newBook;
    }
    //Menampilkan data buku berdasarkan id
    findbyId(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    //Mengupdate data buku berdasarkan id
    update(id: number, updatedBook: Partial<Book>): Book | undefined {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            const book = this.books[bookIndex];
            const updatedBookData = { ...book, ...updatedBook };
            this.books[bookIndex] = updatedBookData;
            return updatedBookData;
        }
        return undefined;
    }

    //Menghapus data buku berdasarkan id
    remove(id: number): boolean {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            return false;
        }
        this.books.splice(bookIndex, 1);
        return true;
    }
}
