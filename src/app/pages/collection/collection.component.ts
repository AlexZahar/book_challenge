import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ItemService } from 'src/app/core/services/item.service';
import { Book } from 'src/app/core/interfaces/book';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];

  constructor(
    private api: ApiService,
    private action: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
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

  /**
   * Edit and delete books
   * @param actionObject
   */
  onActionSelected(actionObject: { action: string; book: Book }) {
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
          this.router.navigate(
            [`edit/${book._id}`]
            // { relativeTo: this.route }
          );
          console.log('EDIT', actionObject.book._id);
          break;
        default:
          return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Filter books array based on user's search input
   * @param searchData
   */
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
