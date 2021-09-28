import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CalendarComponent} from "../../../modeles/admin/calendar/calendar.component";
import {HomeWebComponent} from "../home-web/home-web.component";
import {ProductComponent} from "../../../modeles/web/product/product.component";
import {BranchAddressComponent} from "../../../modeles/web/branch-address/branch-address.component";
import {NewsComponent} from "../../../modeles/web/news/news.component";
import {AboutComponent} from "../../../modeles/web/about/about.component";
import {ContactWorkComponent} from "../../../modeles/web/contact-work/contact-work.component";

const routes : Routes = [{
  path: '',
  component: HomeWebComponent
},
  {
  path: 'home',
  component: HomeWebComponent
},
  {
  path: 'calendar',
  component: CalendarComponent
},
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'address',
    component: BranchAddressComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactWorkComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageWebRoutingModule { }
