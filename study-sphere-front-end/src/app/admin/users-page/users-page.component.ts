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
  profilePictureUrl: string = 'https://imgur.com/uq1ykDK.jpg';
  selectedFile: File | null = null;
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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file && file.size <= 1048576) { // 1MB = 1048576 bytes
      this.selectedFile = file;
      this.profilePictureUrl = URL.createObjectURL(file); // Temporary URL for preview
    } else {
      alert('File is too large. Max size is 1MB.');
    }
  }

  uploadProfilePicture() {
    if (!this.selectedFile) {
      alert('Please select a file first.');
      return;
    }
  }

  logout() {
    this.authService.logout();
  }

  gotopg() {
    this.router.navigate(['/playground']);
  }

}
