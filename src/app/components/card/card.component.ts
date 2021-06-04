import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Book } from '../../core/interfaces/book';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  books: Book[] = [];
  constructor(private api: ApiService) {}
  book: any;
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    try {
      this.api.getBooks().subscribe(data => {
        console.log('DATAAA', data);
        this.books = data;
        this.book = this.books[1];

        console.log(this.book.cover);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
