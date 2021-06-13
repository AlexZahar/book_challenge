import { Component, OnInit } from '@angular/core';
import { User } from '../../core/interfaces/user';
import { ApiService } from '../../core/services/api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  users: any = [];
  user: User;
  avatar: string = '';
  isUser = false;
  isDropdown = false;
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
        this.user = this.users[environment.loggedInUser];
        this.api.loggedUser = this.user;
        this.isUser = true;
      });
    } catch (error) {
      console.log(error);
    }
  }
  toggleDropdown() {
    this.isDropdown = !this.isDropdown;
  }
}
