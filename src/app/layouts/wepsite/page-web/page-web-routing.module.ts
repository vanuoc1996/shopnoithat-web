import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "../../../modeles/admin/table/table.component";
import {ChairComponent} from "../../../modeles/admin/chair/chair.component";
import {CalendarComponent} from "../../../modeles/admin/calendar/calendar.component";
import {SettingComponent} from "../../adnin/setting/setting.component";
import {HomeWebComponent} from "../home-web/home-web.component";

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
