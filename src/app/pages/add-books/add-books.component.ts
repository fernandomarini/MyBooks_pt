import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {

  constructor( public bookService: BooksService, private router: Router ){}

  newBook(  newTitle: string, newType: string, newAuthor: string, newPrice: number, 
               newPhoto: string, newId_book: number, newId_user: number  ): void {
      this.bookService.add( new Book( newTitle, newType, newAuthor, newPrice, 
          newPhoto, newId_book, newId_user));  
      this.router.navigate(['/books']);  
  };    

}
