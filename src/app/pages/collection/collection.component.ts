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
  filteredBooks: Book[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    try {
      this.api.getBooks().subscribe(data => {
        console.log('Books Data:', data);
        this.books = data;
        this.filteredBooks = this.books
       
        
      });
    } catch (error) {
      console.log(error);
    }
  }

  onSearch(searchData:string) {
    if (searchData) {

      this.filteredBooks = this.filteredBooks.filter( (ele:Book) => {
      // book.title.toLowerCase().includes(searchData.toLowerCase());
      let arrayelement = ele.title.toLowerCase()
        return arrayelement.includes(searchData.toLowerCase())
        });
        console.log(this.filteredBooks);
      } else {
        this.filteredBooks = this.books
        console.log(this.filteredBooks);
    }
    
  }
}
