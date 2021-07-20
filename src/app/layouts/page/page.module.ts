import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageRoutingModule} from "./page-routing.module";
import {PageComponent} from "./page.component";
import {FooterComponent} from "../footer/footer.component";
import {SidebarComponent} from "../sidebar/sidebar.component";



@NgModule({
  declarations: [
    PageComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports : [
  ],
  providers: []
})
export class PageModule { }
