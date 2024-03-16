import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlaygroundComponent } from './components/playground/playground.component';
import { LogoutBarComponent } from './shared/logout-bar/logout-bar.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { CreatePostComponent } from './components/createPost/create-post.component';
import { CreateButtonComponent } from './shared/create-button/create-button.component';
import { ProfileButtonComponent } from './shared/profile-button/profile-button.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupModule } from './components/signup/signup.module';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SignupModule,
    CardModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
