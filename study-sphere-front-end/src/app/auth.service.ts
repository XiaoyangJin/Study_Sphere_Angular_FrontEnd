import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = [
    {
      id: 1,
      name: 'xy',
      username: 'xy@gmail.com',
      password: '12345'
    },
    {
      id: 1,
      name: 'summer',
      username: 'summer@gmail.com',
      password: 'summer'
    }
  ];
  session: any;
  constructor(private router: Router) {
    let session: any = localStorage.getItem('session');
    if (session) {
      session = JSON.parse(session);
    }
    this.session = session;
  }

  login(username: string, password: string) {
    let user = this.users.find((u) => u.username === username && u.password === password);
    if (user) {
      //save the user into session
      this.session = user;
      // refresh and save the session into local
      localStorage.setItem('session', JSON.stringify(this.session));
    }
    return user;
  }

  logout() {
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }

  // Add a method to allow adding new users
  addUser(newUser: any) {
    newUser.id = this.users.length + 1; // Assign a unique ID
    console.log(newUser);
    this.users.push(newUser);
  }
}
