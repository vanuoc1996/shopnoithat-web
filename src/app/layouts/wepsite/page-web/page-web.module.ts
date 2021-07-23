import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarWebComponent} from "../navbar-web/navbar-web.component";
import {FooterWebComponent} from "../footer-web/footer-web.component";
import {PageWebComponent} from "./page-web.component";
import {PageWebRoutingModule} from "./page-web-routing.module";
import {LiveContactComponent} from "../live-contact/live-contact.component";



@NgModule({
    declarations: [
        NavbarWebComponent,
        FooterWebComponent,
        PageWebComponent,
        LiveContactComponent
    ],
  imports: [
    CommonModule,
    PageWebRoutingModule
  ],
  exports : [

  ],
  providers: []
})
export class PageWebModule { }
