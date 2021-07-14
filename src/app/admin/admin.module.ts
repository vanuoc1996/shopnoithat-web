import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {PasswordModule} from "primeng/password";


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
