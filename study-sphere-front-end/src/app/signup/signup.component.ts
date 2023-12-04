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

  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  signup() {
    //put it into the database(postgres sql)[after backend nodejs?]
    //after email authroization(future optional)
    //change the authority to be able to login
    //redirect to the public page
    this.router.navigate(['']);
  }
}
