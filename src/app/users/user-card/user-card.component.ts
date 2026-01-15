import { Component, Input } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
    @Input() user!: User;

    constructor(private router: Router) {}
    viewDetails(userId: number) {
    const encodedId = btoa(userId.toString()); // encode
    this.router.navigate(['/users/details', encodedId]);
  }
}
