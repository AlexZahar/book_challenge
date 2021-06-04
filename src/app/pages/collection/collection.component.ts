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
  filteredBooks: Book[] = [];

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    try {
      this.api.getBooks().subscribe(data => {
        this.books = data;
        this.filteredBooks = this.books;
      });
    } catch (error) {
      console.log(error);
    }
  }

  onSearch(searchData: string) {
    if (searchData) {
      this.filteredBooks = this.books;
      this.filteredBooks = this.filteredBooks.filter((book: Book) => {
        let arrayelement = book.title.toLowerCase();
        return arrayelement.includes(searchData.toLowerCase());
      });
    } else {
      this.filteredBooks = this.books;
    }
  }
}
