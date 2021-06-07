import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/core/interfaces/book';
import { ItemService } from 'src/app/core/services/item.service';

@Component({
  selector: 'app-wizzard',
  templateUrl: './wizzard.component.html',
  styleUrls: ['./wizzard.component.scss'],
})
export class WizzardComponent implements OnInit {
  @ViewChild('form') bookEditForm: NgForm;
  actionsOptions: [true, false] = [true, false];
  newId: string = '';
  bookToEdit: any = {
    _id: '0004',
    author: 'J. K. Rowling',
    title: 'Harry Potter',
    cover: 'assets/covers/azkaban1.jpg',
    genres: 'Literature, Fiction',
    synopsis:
      "Harry is back at the Dursleys' for the summer holidays, where he sees on television that a convict named Sirius Black has escaped from prison. After the Dursley's Aunt Marge insults Harry and his parents, Harry accidentally inflates her, then runs away from home, fearing expulsion from school. ",
    releaseDate: 'July 8, 1999',
    editable: false,
    deletable: false,
  };
  successMessage = 'Yai, your book was created!';
  books: Book[] = this.action.books;
  editedBook: Book;
  constructor(private router: Router, private action: ItemService) {}

  ngOnInit(): void {}
  returnToCollection() {
    this.router.navigate(['collections']);
  }
  updateCardPreview(event: any) {
    this.editedBook = {
      _id: this.generateId(100),
      title: this.bookEditForm.value.title,
      cover: this.bookEditForm.value.cover,
      author: this.bookEditForm.value.author,
      synopsis: this.bookEditForm.value.synopsis,
      genres: this.bookEditForm.value.genres,
      deletable: this.bookEditForm.value.deletable,
      editable: this.bookEditForm.value.editable,
    };
    this.bookToEdit = this.editedBook;
  }
  generateId(max: number) {
    return (this.newId = Math.floor(Math.random() * max).toString());
  }
  onSubmit() {
    this.action.books.push(this.editedBook);
    console.log('WIZZARD WORKS SUBMIT');
    this.action.displaySuccessMessage(this.successMessage);
    this.router.navigate(['collections']);
  }
}
