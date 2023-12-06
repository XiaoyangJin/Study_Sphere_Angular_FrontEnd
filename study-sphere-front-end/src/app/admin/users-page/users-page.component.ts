import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
  }

  gotopg() {
    this.router.navigate(['/playground']);
  }

}
