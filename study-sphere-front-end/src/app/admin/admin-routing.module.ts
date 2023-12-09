import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from '../playground/playground.component';
import { AdminComponent } from './admin.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  {
    // path: '', component: PlaygroundComponent,
    path: '', component: AdminComponent, children: [
      { path: '', component: UsersPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
