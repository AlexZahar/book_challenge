import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public books: any = [];
  public bookToEdit: Book;
  public successMessage: string = '';
  public displayMessage = false;
  public displayItemAction = false;

  constructor() {}

  /**
   * Handle book deletion
   * @param array
   * @param elem
   */
  deleteBook(array: Book[], elem: Book) {
    try {
      const deleteBook = array.filter(e => e._id === elem._id);
      console.log(deleteBook);

      deleteBook.forEach(f =>
        array.splice(
          array.findIndex(e => e._id === f._id),
          1
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Handle book update action
   * @param array
   * @param elem
   */
  updateBook(array: Book[], elem: Book) {
    try {
      let foundIndex = array.findIndex(x => x._id == elem._id);
      array[foundIndex] = elem;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Display a success message after successfully Creating or Editing an item record
   * @param successMessage
   */
  displaySuccessMessage(successMessage: string) {
    this.successMessage = successMessage;
    this.displayMessage = true;
  }
}
