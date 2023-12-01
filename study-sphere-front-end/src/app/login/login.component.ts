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
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  login() { }

  @ViewChild('passwordToggle') passwordToggle!: ElementRef;
  isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    if (this.isPasswordVisible) {
      passwordInput.type = 'text';
      this.passwordToggle.nativeElement.textContent = 'Hide Password';
    } else {
      passwordInput.type = 'password';
      this.passwordToggle.nativeElement.textContent = 'Show Password';
    }
  }
}
