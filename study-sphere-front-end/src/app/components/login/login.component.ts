import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  ploginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })


  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  // login() {
  //   let user = this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
  //   if (!user) {
  //     alert('Invalid username or password');
  //   } else {
  //     this.authService.setCurrentUser(this.loginForm.value.username);
  //     this.router.navigateByUrl('/admin')
  //     // this.isFormSubmitted = true;
  //   }
  // }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  get pemail() {
    return this.ploginForm.controls['email'];
  }

  get ppassword() {
    return this.ploginForm.controls['password'];
  }
}
