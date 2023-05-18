import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[]

  constructor( public bookService: BooksService){

      this.books = this.bookService.getAll();  

  };

  public buscarLibro ( id_book: number ){
    if(id_book != 0 ) { 
      this.bookService.getOne(id_book);    
      this.books = this.bookService.getOne(id_book);    
    } else { 
      this.bookService.getAll();
    };
  };
  
  public borrar( libroBorrar: Book){ 
    this.bookService.delete(libroBorrar.id_book);
  };


};


