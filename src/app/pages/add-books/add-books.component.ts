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

  public books: Book[];

  constructor( public bookService: BooksService, private router: Router ){};
          
    public newBook(  newTitle: string, newAuthor: string, newType: string, newPhoto: string,
           newPrice: number, newId_book: number, newId_user: number): void {
    
      let libroNuevo: Book = new Book( newTitle, newAuthor, newType, newPhoto, 
        newPrice, newId_book, newId_user)

      this.bookService.add( libroNuevo ).subscribe( ( data:boolean )=> {
          if( data ){
            alert("Libro añadido exitosamente");
          }else{
            alert("Libro ya existente");
          };
      });  

      this.router.navigate(['/books']);  
  };
}; 


/*    // *****   FORMATO ANTERIOR AL RETO NODE  *****

  constructor( public bookService: BooksService, private router: Router ){}

  newBook(  newTitle: string, newType: string, newAuthor: string, newPrice: number, 
               newPhoto: string, newId_book: number, newId_user: number  ): void {
      this.bookService.add( new Book( newTitle, newType, newAuthor, newPrice, 
          newPhoto, newId_book, newId_user));  
      this.router.navigate(['/books']);  
  };  */

