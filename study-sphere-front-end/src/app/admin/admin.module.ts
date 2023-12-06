import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersPageComponent } from './users-page/users-page.component';
import { LogoutBarComponent } from '../shared/logout-bar/logout-bar.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    LogoutBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
