import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../core/interfaces/book';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() book: Book;
  @Output() selectedAction = new EventEmitter<{ action: string; book: Book }>();
  actionObject: { action: string; book: Book };
  menuOptions: any[] = ['Delete', 'Edit'];
  selectedOption = '';
  isOpened = false;
  constructor() {}

  ngOnInit(): void {}
  toggleDropdown() {
    this.isOpened = !this.isOpened;
  }
  // Dispatching actions to parrent container with the book refference
  selectAction(index: any) {
    console.log(this.book);
    this.actionObject = { action: this.menuOptions[index], book: this.book };
    this.selectedAction.emit(this.actionObject);
  }
}
