import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit, OnDestroy {

  username: string | null = null;
  private userSubscription!: Subscription;

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userSubscription = this.authService.getCurrentUserObservable().subscribe(username => {
      this.username = username;
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  logout() {
    this.authService.logout();
  }

  gotopg() {
    this.router.navigate(['/playground']);
  }

}
