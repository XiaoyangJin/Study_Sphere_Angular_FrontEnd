import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm!: FormGroup;
  info = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(this.info.username, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl(this.info.password, [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  signup() {
    // Get the signupForm values
    const username = this.signupForm.get('username')?.value;
    const password = this.signupForm.get('password')?.value;

    console.log(username);

    // Check if both username and password have valid length(is it needed?)
    if (username.Length < 4 && password.length < 8) {
      // Both fields have valid length, proceed with signup
      const newUser = {
        username: username,
        password: password
      };

      // Add the new user to the AuthService
      this.authService.addUser(newUser);

      // Redirect to the public page or perform other actions as needed
      this.router.navigate(['/login']);

      // Reset the signupForm fields to empty after signup
      this.signupForm.reset();
    } else {
      // Handle the case where either or both fields are empty
      // You can show an error message or perform other actions
    }
  }
}
