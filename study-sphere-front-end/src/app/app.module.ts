import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { PlaygroundComponent } from './playground/playground.component';
import { LogoutBarComponent } from './shared/logout-bar/logout-bar.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
import { CreatePostComponent } from './createPost/create-post.component';
import { CreateButtonComponent } from './shared/create-button/create-button.component';
import { ProfileButtonComponent } from './shared/profile-button/profile-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    PlaygroundComponent,
    LogoutBarComponent,
    PostComponent,
    CreatePostComponent,
    CreateButtonComponent,
    ProfileButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
