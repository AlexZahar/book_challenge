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
  successMessage = 'Yai, your book was created!';
  books: Book[] = this.action.books;
  editedBook: Book;

  // Default book preview when oppening wizzard
  bookToEdit: any = {
    _id: '0004',
    author: 'J. K. Rowling',
    title: 'Harry Potter',
    cover: 'assets/covers/azkaban1.jpg',
    genres: ['Literature', 'Fiction'],
    synopsis:
      "Harry is back at the Dursleys' for the summer holidays, where he sees on television that a convict named Sirius Black has escaped from prison. ",
    releaseDate: 'July 8, 1999',
    editable: false,
    deletable: false,
  };

  constructor(private router: Router, private action: ItemService) {}

  ngOnInit(): void {
    // Removing edit options from the card in wizzard mode
    this.action.displayItemAction = false;
  }

  /**
   * Handle cancel button behavior
   */
  returnToCollection() {
    this.router.navigate(['collections']);
  }

  /**
   * Card preview update on each key-up
   * @param event
   */
  updateCardPreview(event: any) {
    this.editedBook = {
      _id: this.generateId(999),
      title: this.bookEditForm.value.title,
      cover: this.bookEditForm.value.cover,
      author: this.bookEditForm.value.author,
      synopsis: this.bookEditForm.value.synopsis,
      genres: [this.bookEditForm.value.genres],
      deletable: this.bookEditForm.value.deletable,
      editable: this.bookEditForm.value.editable,
    };
    this.bookToEdit = this.editedBook;
  }

  /**
   * Generating a random ID based on the input max value
   * @param max
   */
  generateId(max: number) {
    return (this.newId = Math.floor(Math.random() * max).toString());
  }

  /**
   * On form submit, create a new card and return to "collections" page
   */
  onSubmit() {
    this.action.books.push(this.editedBook);
    this.action.displaySuccessMessage(this.successMessage);
    this.router.navigate(['collections']);
  }
}
