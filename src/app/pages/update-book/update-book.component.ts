import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  public libroModifocado: Book;

  constructor ( public bookService: BooksService, private router: Router){

  };

    public modifyBook (  newTitle: string, newAuthor: string, newType: string, newPhoto: string, 
                    newPrice: number, newId_book: number, newId_user: number  ){ 

      let libroModif = new Book( newTitle, newAuthor, newType, newPhoto, newPrice, newId_book, newId_user);

    this.bookService.edit( libroModif ).subscribe(( data )=>{
      alert(" El libro se modifico con Exito");
    }); 
  };
};



/*   // *****   FORMATO ANTERIOR AL RETO NODE  *****

    public modifyBook (  newTitle: string, newType: string, newAuthor: string, newPrice: number, 
                        newPhoto: string, newId_book: number, newId_user: number  ){ 

        this.libroModifocado = new Book( newTitle, newType, newAuthor, newPrice, 
                                  newPhoto, newId_book, newId_user)

        if( this.bookService.edit(this.libroModifocado) == true){
          alert( " El libro se modifico con Exito");
        } else {
          alert(`El libro no pudo ser modificado. \n El id book : ${this.libroModifocado.id_book} no existe `);
        };

  };
};     */