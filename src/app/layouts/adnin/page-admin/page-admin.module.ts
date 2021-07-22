import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageAdminRoutingModule} from "./page-admin-routing.module";
import {PageAdminComponent} from "./page-admin.component";
import {FooterComponent} from "../footer/footer.component";
import {SidebarComponent} from "../sidebar/sidebar.component";



@NgModule({
  declarations: [
    PageAdminComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PageAdminRoutingModule
  ],
  exports : [
  ],
  providers: []
})
export class PageAdminModule { }
