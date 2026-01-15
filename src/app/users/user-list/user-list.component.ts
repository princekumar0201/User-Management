import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: User[] = [];
  filteredUsers: User[] = [];
  searchText:any = '';
  selectedStatus:any = 'All';
  loading:any = true;
  error:any = '';


  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: data => {
        this.users = data;
        this.filteredUsers = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      (this.selectedStatus === 'All' || user.status === this.selectedStatus) &&
      (user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
       user.username.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }

}
