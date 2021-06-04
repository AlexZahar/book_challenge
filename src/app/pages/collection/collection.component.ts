import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Book } from 'src/app/core/interfaces/book';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  books: Book[] = [];
  // book: any;

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    try {
      this.api.getBooks().subscribe(data => {
        console.log('DATAAA', data);
        this.books = data;
        // this.book = this.books[1];

        // console.log(this.book.cover);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
