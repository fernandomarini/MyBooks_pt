import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book[]

  constructor(){

    this.books = [];

    let book001 = new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://http2.mlstatic.com/D_NQ_NP_657353-MLA44342368528_122020-O.jpg",1,2);
    let book002 = new Book("Sombras","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",2,2,);
    let book003 = new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://media.revistagq.com/photos/5f6c9b117458e06669aaa2b0/master/w_1643,h_2500,c_limit/6%20resplandor.jpg",3,5);
    let book004 = new Book("Sombras","Ciencia Ficcion","E.King",19,"https://http2.mlstatic.com/D_NQ_NP_657353-MLA44342368528_122020-O.jpg",4,6);
    let book005 = new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",5,2);
    let book006 = new Book("Sombras","Ciencia Ficcion","E.King",19,"https://media.revistagq.com/photos/5f6c9b117458e06669aaa2b0/master/w_1643,h_2500,c_limit/6%20resplandor.jpg",6,5);
    let book007 = new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",7,2);
    let book008 = new Book("Sombras","Ciencia Ficcion","E.King",19,"https://media.revistagq.com/photos/5f6c9b117458e06669aaa2b0/master/w_1643,h_2500,c_limit/6%20resplandor.jpg",8,5);
    let book009 = new Book("La Bestia","Ciencia Ficcion","E.King",19,"https://images-na.ssl-images-amazon.com/images/I/81c8No6mSPL.jpg?w=144",9,2);

    this.books.push(book001);
    this.books.push(book002);
    this.books.push(book003);
    this.books.push(book004);
    this.books.push(book005);
    this.books.push(book006);
    this.books.push(book007);
    this.books.push(book008);
    this.books.push(book009);

  };

  public addBook( newTitle: string, 
                  newType: string, 
                  newAuthor: string, 
                  newPrice: number,
                  newPhoto: string,
                  newId_book: number,
                  newId_user: number ){

      this.books.push ( new Book ( newTitle, newType, newAuthor, newPrice, newPhoto, newId_book, newId_user))

    };
    
    public borrar( libroBorrar: Book){
      let borrarBook = this.books.filter( books => books.id_book != libroBorrar.id_book)
    
      this.books = borrarBook;
    }



};


