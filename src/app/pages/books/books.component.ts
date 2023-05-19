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

  public buscarLibro ( id_book: number ){   // FUNCIONA MAL
    if(id_book == 0 ) { 
      this.bookService.getAll();
      console.log(this.books);     // Para probar, ELIMINAR
  } else { 
    this.bookService.getOne(id_book);    
    this.books = this.bookService.getOne(id_book);      
  };

  /*   if(id_book != undefined ) {   // ORIGINAL
        this.bookService.getOne(id_book);    
        this.books = this.bookService.getOne(id_book);    
    } else { 
        this.bookService.getAll();
        console.log(this.books);
    }; */
  };
  
  public borrar( libroBorrar: Book){ 
    this.bookService.delete(libroBorrar.id_book);
  };


};


