import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageAdminRoutingModule} from "./page-admin-routing.module";
import {PageAdminComponent} from "./page-admin.component";
import {FooterComponent} from "../footer-admin/footer.component";
import {SidebarComponent} from "../sidebar-admin/sidebar.component";



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
