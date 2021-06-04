import { Component, OnInit } from '@angular/core';
import { User } from '../../core/interfaces/user';
import { HttpClient } from '@angular/common/http';
import * as userData from '../../core/data/signed-in-user.json';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // loggedUser: User = (userData as any).default.users[2];
  users: any = [];
  user: User;
  avatar: string = '';
  newUser = {
    _id: '05',
    username: 'Phillip',
    avatarUrl: 'assets/avatars/batman-avatar.svg',
    role: 'read-write',
  };
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    try {
      await this.httpClient.get('assets/data/users.json').subscribe(data => {
        console.log(data);
        this.users = data;
        this.user = this.users[0];
      });
    } catch (error) {
      console.log(error);
    }
  }

  // createUser(): Observable<any> {
  //   return this.httpClient.delete(
  //     'http://localhost:4200/assets/data/users.json',
  //     this.newUser
  //   );
  // }
  // async create() {
  //   try {
  //     const response = await this.createUser();
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return;
  // }
}
