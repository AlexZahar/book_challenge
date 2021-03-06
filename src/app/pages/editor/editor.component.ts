import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/core/interfaces/book';
import { ItemService } from 'src/app/core/services/item.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @ViewChild('form') bookEditForm: NgForm;
  isCardAction: boolean;
  books: Book[] = this.action.books;
  book: any;
  bookToEdit: Book;
  actionsOptions: [true, false] = [true, false];
  editedBook: Book;
  successMessage = 'Card edited successfully!';

  constructor(
    private route: ActivatedRoute,
    private action: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.action.displayItemAction = false;
    this.bookToEdit = this.action.bookToEdit;
    console.log('bookToEdit', this.bookToEdit);
    this.book = {
      _id: this.route.snapshot.params['id'],
    };
  }

  /**
   * Card preview update on each key-up
   * @param event
   */
  updateCardPreview(event: any) {
    this.editedBook = {
      _id: this.book._id,
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
   * Handle "Cancel" button behavior
   */
  returnToCollection() {
    this.router.navigate(['collections']);
  }

  /**
   * On form submit, update the card specific ID and return to "collections" page
   */
  onSubmit() {
    this.editedBook = {
      _id: this.book._id,
      title: this.bookEditForm.value.title,
      cover: this.bookEditForm.value.cover,
      author: this.bookEditForm.value.author,
      synopsis: this.bookEditForm.value.synopsis,
      genres: [this.bookEditForm.value.genres],
      deletable: this.bookEditForm.value.deletable,
      editable: this.bookEditForm.value.editable,
    };
    this.action.updateBook(this.books, this.editedBook);
    this.action.displaySuccessMessage(this.successMessage);
    this.router.navigate(['collections']);
  }
}
