import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent {
  constructor(private router: Router) { }

  navigateToProfile() {
    this.router.navigate(['/admin']);
  }
}
