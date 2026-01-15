import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users =>
        users.map(user => ({
          ...user,
          status: Math.random() > 0.5 ? 'Active' : 'Inactive'
        }))
      )
    );
  }

  getUserById(id: number) {
  return this.http.get<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
}
}
