import { Component, Input } from '@angular/core';
// import { Books } from '../../models/books.models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'], // Use styleUrls instead of styleUrl
})
export class BookComponent {
  @Input() book: any; // Define input property 'book'
}
