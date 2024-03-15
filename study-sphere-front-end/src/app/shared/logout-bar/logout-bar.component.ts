import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-bar',
  templateUrl: './logout-bar.component.html',
  styleUrls: ['./logout-bar.component.css']
})
export class LogoutBarComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    console.log("logout start");
    this.router.navigate(['/login']);
    console.log("navigate to login");
    this.authService.logout();
    console.log("logout end");
  }
}
