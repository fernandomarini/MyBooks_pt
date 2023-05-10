import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from 'src/app/pages/books/books.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() bookPadre: Book;
  @Output() elementoBorrar = new EventEmitter<Book>();

  delete(){
    this.elementoBorrar.emit(this.bookPadre);
    
  }

}

