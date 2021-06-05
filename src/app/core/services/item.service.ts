import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  deleteBook(array: Book[], elem: Book) {
    try {
      const deleteBook = array.filter(e => e._id === elem._id);
      console.log(deleteBook);

      return deleteBook.forEach(f =>
        array.splice(
          array.findIndex(e => e._id === f._id),
          1
        )
      );
    } catch (error) {
      console.log(error);
    }
  }
}
