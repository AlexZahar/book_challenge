import { Component, OnInit } from '@angular/core';
import { User } from '../../core/interfaces/user';
import { HttpClient } from '@angular/common/http';
import * as userData from '../../core/data/signed-in-user.json';
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
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    try {
      this.httpClient.get('assets/data/users.json').subscribe(data => {
        console.log(data);
        this.users = data;
        this.user = this.users[0];
        console.log(this.user?.avatarUrl);
        this.avatar = this.user?.avatarUrl;
      });
    } catch (error) {
      console.log(error);
    }
  }
}
