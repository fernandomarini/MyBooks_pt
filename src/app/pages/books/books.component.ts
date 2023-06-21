import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  public libros: Book[]

  constructor( public bookService: BooksService){
    this.bookService.getAll().subscribe(( data: any )=>{
      console.log(data);
      this.libros = data;
    });  
  };

  public buscarLibro ( id_book: number ){ 
    if( id_book != 0) { 
       this.bookService.getOne(id_book).subscribe(( data: any )=> {
        this.libros = [data.data];
        console.log(data);
        });
      } else {
           alert("Libro Inexistente");
         };             
};


/*   NO FUNCIONA
  public buscarLibro ( id_book: number ){ 
       if( id_book == 0) { 
          this.bookService.getAll().subscribe( ( data )=> {
            console.log("No encontrado");
            this.libros = data ['data'];
          });
        } else { 
        this.bookService.getOne(id_book).subscribe(( data )=>{
          let libroBuscado: Book[] = data['data'];
            if(id_book != undefined){
              this.libros = libroBuscado;
              console.log(this.libros);
            } else {
              alert("Libro Inexistente");
            };
          })       
    };
  }; */

  public borrar( libroBorrar: Book){ 
    this.bookService.delete(libroBorrar.id_book).subscribe(( data )=>{
      this.bookService.getAll().subscribe(( data: any )=> {
        console.log(data);
        this.libros = data;
      })
    });
  };

};





/*   // *****   FORMATO ANTERIOR AL RETO NODE  *****

export class BooksComponent {

  public libros: Book[]

  constructor( public bookService: BooksService){

      this.libros = this.bookService.getAll();  

  };

  public buscarLibro ( id_book: number ){ 
       if( id_book != 0 ) { 
          this.libros = this.bookService.getOne(id_book);
      } else { 
          this.libros =  this.bookService.getAll();
    };
  };
  
  public borrar( libroBorrar: Book){ 
    this.bookService.delete(libroBorrar.id_book);
  };


}; */


