import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    console.log('Start');
    return this.http.get<Book[]>(
      `${environment.apiBaseUrl}/assets/api/books/books.json`
    );
  }
  getUsers() {
    return this.http.get('assets/data/users.json');
  }
}
