import { Component } from '@angular/core';
import { books } from '../../assets/fixtures/books';
import { Books } from '../../models/books.models';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.css',
})
export class ListBookComponent {
  books: Books[] = books;
  constructor() {}
}
