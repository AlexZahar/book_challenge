import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/core/interfaces/book';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @ViewChild('form') bookEditForm: NgForm;
  book: any;
  actionsOptions: [true, false] = [true, false];
  editedBook: Book;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.book = {
      _id: this.route.snapshot.params['id'],
    };
  }
  // onSubmit(form: NgForm) {
  //   console.log('Submitted', form);
  // }
  onSubmit() {
    console.log(this.bookEditForm);
    console.log(this.bookEditForm.value.title);
    this.editedBook = {
      title: this.bookEditForm.value.title,
      author: this.bookEditForm.value.author,
      synopsis: this.bookEditForm.value.synopsis,
      genres: this.bookEditForm.value.genres,
      deletable: this.bookEditForm.value.deletable,
      editable: this.bookEditForm.value.editable,
    };
    // this.editedBook.title = this.bookEditForm.value.title;
    // this.editedBook.author = this.bookEditForm.value.author;
    // this.editedBook.synopsis = this.bookEditForm.value.synopsis;
    // this.editedBook.genres = this.bookEditForm.value.genres;
    // this.editedBook.deletable = this.bookEditForm.value.deletable;
    // this.editedBook.editable = this.bookEditForm.value.editable;
    console.log(this.editedBook);
  }
}
