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
    }
  ]
  constructor() { }
}
