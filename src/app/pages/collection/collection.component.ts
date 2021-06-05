import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ItemService } from 'src/app/core/services/item.service';
import { Book } from 'src/app/core/interfaces/book';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];

  constructor(private api: ApiService, private action: ItemService) {}
  ngOnInit(): void {
    this.getBooks();
    console.log('on init', this.books);
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
  onActionSelected(actionObject: { action: string; book: Book }) {
    console.log('ssss', actionObject);
    try {
      const book = actionObject?.book;
      console.log(book.title);
      switch (actionObject.action.toLowerCase()) {
        case 'delete':
          if (confirm(`Are you sure you want to delete ${book.title}?`)) {
            this.action.deleteBook(this.books, book);
          }
          break;
        case 'edit':
          console.log('EDIT', actionObject.book._id);
          break;
        default:
          return;
      }
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
