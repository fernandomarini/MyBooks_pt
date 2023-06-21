import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BooksService {

  private url:string = 'http://localhost:3000/books'
  private books: Book []

  constructor( private http:HttpClient) {
    this.getAll();
  };
      
  public add( libro: Book ){                                 // FUNCIONA
    return this.http.post(this.url, libro);
  };

  public getAll(){                                           // FUNCIONA
    return this.http.get(this.url);
  };
  
  public getOne( id_book:number ){                          // NO FUNCIONA - EN PROCESO  
    return this.http.get(this.url + "/"+ id_book);
  };

  public edit( libMof: Book){                              // FUNCIONA
    return this.http.put(this.url, libMof);
  };

  public delete(id_book: number){                            // FUNCIONA
    return this.http.request('delete', this.url, {body:{id_book: id_book}}); 
  };

};


/*   // *****   FORMATO ANTERIOR AL RETO NODE  *****

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


  public edit( libMof: Book): boolean {      // FUNCIONANDO

    let book_result: Book = null;    

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book == libMof.id_book) {
        book_result = this.books[i]
      };
    };

    let result: boolean;
    if (book_result == null) {
      result = false;
    } else {
        book_result.id_user = book_result.id_user; 
        book_result.title = libMof.title;
        book_result.type = libMof.type
        book_result.author = libMof.author;
        book_result.price = libMof.price;
        book_result.photo = libMof.photo;     
        result = true; 
    }  
    return result;
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

 */