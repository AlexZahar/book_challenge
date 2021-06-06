import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { Book } from 'src/app/core/interfaces/book';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  book: any;
  // paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.book = {
    //   _id: this.route.snapshot.params['id'],
    // };
    // this.paramsSubscription =
    this.route.params.subscribe((params: Params) => {
      this.book._id = params['id'];
    });
  }
  // ngOnDestroy(): void {
  //   this.paramsSubscription.unsubscribe();
  // }
}
