// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }
// login.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // You can apply your CSS styles here
})
export class LoginComponent {

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
