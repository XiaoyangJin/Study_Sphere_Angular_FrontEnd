import { Injectable } from '@angular/core';

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
  constructor() { }

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
}
