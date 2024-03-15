import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router'; // Import RouterModule if routing is needed

@NgModule({
    declarations: [
        SignupComponent // Declare SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule, // Add ReactiveFormsModule to the imports array
        RouterModule, // Add RouterModule if you need to configure routes for the SignupComponent
        FormsModule
    ],
    exports: [
        SignupComponent // Export SignupComponent if it will be used outside this module
    ]
})
export class SignupModule { }
