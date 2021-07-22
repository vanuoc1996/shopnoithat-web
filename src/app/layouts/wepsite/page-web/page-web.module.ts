import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarWebComponent} from "../navbar-web/navbar-web.component";
import {HomeWebComponent} from "../home-web/home-web.component";
import {FooterWebComponent} from "../footer-web/footer-web.component";
import {PageWebComponent} from "./page-web.component";
import {PageAdminRoutingModule} from "../../adnin/page-admin/page-admin-routing.module";
import {CalendarComponent} from "../../../modeles/admin/calendar/calendar.component";



@NgModule({
  declarations: [
    NavbarWebComponent,
    FooterWebComponent,
    PageWebComponent
  ],
  imports: [
    CommonModule,
    PageAdminRoutingModule
  ],
  exports : [

  ],
  providers: []
})
export class PageWebModule { }
