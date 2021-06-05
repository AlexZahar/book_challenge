import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  expanded = false;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.expanded = !this.expanded;
  }
}
