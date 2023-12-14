import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './createPost/create-post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then((m) => m.PublicModule), },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule), canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'create-post', component: CreatePostComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
