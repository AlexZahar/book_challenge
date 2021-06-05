import { Component, OnInit } from '@angular/core';
import { User } from '../../core/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  users: any = [];
  user: User;
  avatar: string = '';
  newUser = {
    _id: '05',
    username: 'Phillip',
    avatarUrl: 'assets/avatars/batman-avatar.svg',
    role: 'read-write',
  };
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    try {
      this.api.getUsers().subscribe(data => {
        console.log(data);
        this.users = data;
        this.user = this.users[2];
      });
    } catch (error) {
      console.log(error);
    }
  }
}
