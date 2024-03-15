import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/createPost/create-post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./components/public/public.module').then((m) => m.PublicModule), },
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule), canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'playground', component: PlaygroundComponent, canActivate: [AuthGuardService] },
  { path: 'post/:id', component: PostComponent, canActivate: [AuthGuardService] },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'playground', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
