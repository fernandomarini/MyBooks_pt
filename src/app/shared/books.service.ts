import { Injectable } from '@angular/core';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book []

  constructor() {

    this.books = [
    new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://http2.mlstatic.com/D_NQ_NP_657353-MLA44342368528_122020-O.jpg",1,2),
    new Book("Sombras","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",2,2,),
    new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",3,5),
    new Book("Sombras","Ciencia Ficcion","E.King",19,"https://http2.mlstatic.com/D_NQ_NP_657353-MLA44342368528_122020-O.jpg",4,6),
    new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",5,2),
    new Book("Sombras","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",6,5),
    new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",7,2),
    new Book("Sombras","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",8,5),
    new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",9,2)
    ];
  };

  public add( libro: Book): void{                // FUNCIONANDO
    this.books.push(libro);
  };

  public getAll(){                               // FUNCIONANDO
    return this.books;
  };

  public getOne( id_book:number ): Book[] {     // FUNCIONANDO   
      let bookFinal: Book[] = [];
      for ( let i = 0; i < this.books.length ; i++ ){
        if( this.books[i].id_book == id_book){
          bookFinal.push(this.books[i]);               
        };        
      };
      return bookFinal;       
  };

  public edit( book: Book){

    
  };

  public delete(id_book: number): boolean {     // FUNCIONANDO
    for ( let i = 0; i < this.books.length ; i++ ){
      if( this.books[i].id_book == id_book){
        this.books.splice( i,1)              
      };             
    };
    return true; 
  };

};

