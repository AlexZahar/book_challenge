import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../core/interfaces/book';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() book: Book;
  @Output() selectedAction = new EventEmitter<{ action: string; book: Book }>();
  actionObject: { action: string; book: Book };
  isCardAction = false;
  currentRoute: any;
  menuOptions: any[] = [];
  selectedOption = '';
  isOpened = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.checkBookOptions();
  }
  toggleDropdown() {
    this.isOpened = !this.isOpened;
  }
  // Dispatching actions to parrent container with the book refference
  selectAction(index: any) {
    console.log(this.book);
    if (this.book.deletable || this.book.editable) {
      this.actionObject = { action: this.menuOptions[index], book: this.book };
      this.selectedAction.emit(this.actionObject);
    }
  }
  checkBookOptions() {
    this.route.url.subscribe(path => {
      this.currentRoute = path[0].path;
    });

    this.book.deletable || this.book.editable
      ? (this.isCardAction = true)
      : (this.isCardAction = false);

    this.book.deletable ? this.menuOptions.push('Delete') : null;
    this.book.editable ? this.menuOptions.push('Edit') : null;
  }
}
