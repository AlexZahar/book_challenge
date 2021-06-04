import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
})
export class ContentHeaderComponent implements OnInit {
  @Output() searchCriteria = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput: ElementRef;
  searchWord: string;
  constructor() {}

  ngOnInit(): void {}
  searchThis() {
    this.searchWord = this.searchInput.nativeElement.value;
    this.searchCriteria.emit(this.searchWord);
  }
}
