import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public loggedUser: User;

  constructor(private http: HttpClient) {}

  /**
   * Fetching Books data from the json file
   */
  getBooks(): Observable<Book[]> {
    console.log('Start');
    return this.http.get<Book[]>(
      `${environment.apiBaseUrl}/assets/api/books/books.json`
    );
  }

  /**
   * Fetching Users data from the json file
   */
  getUsers() {
    return this.http.get<User[]>('assets/data/users.json');
  }
}
