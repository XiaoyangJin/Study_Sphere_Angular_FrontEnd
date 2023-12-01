import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  isFormSubmitted = false;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  login() {
    let user = this.authService.login(this.form.value.username, this.form.value.password);
    if (!user) {
      alert('Invalid username or password');
    } else {
      this.isFormSubmitted = true;
    }
  }

  @ViewChild('passwordToggle') passwordToggle!: ElementRef;
  isPasswordVisible: boolean = true; // Set it to true by default

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    if (this.isPasswordVisible) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }



}
