import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  signup() {
    // Get the signupForm values
    const username = this.signupForm.get('username')?.value;
    const password = this.signupForm.get('password')?.value;

    console.log(username);

    // Check if both username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      // Both fields are not empty, proceed with signup
      const newUser = {
        username: username,
        password: password
      };

      // Add the new user to the AuthService
      this.authService.addUser(newUser);

      // Redirect to the public page or perform other actions as needed
      this.router.navigate(['']);

      // Reset the signupForm fields to empty after signup
      this.signupForm.reset();
    } else {
      // Handle the case where either or both fields are empty
      // You can show an error message or perform other actions
    }
  }
}
