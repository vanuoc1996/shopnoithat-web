import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "../../modeles/admin/table/table.component";
import {ChairComponent} from "../../modeles/admin/chair/chair.component";
import {CalendarComponent} from "../../modeles/admin/calendar/calendar.component";
import {SettingComponent} from "../setting/setting.component";

const routes: Routes = [{
  path: '',
  redirectTo: 'table'
}, {
  path: 'table',
  component: TableComponent
}, {
  path: 'chair',
  component: ChairComponent
}, {
  path: 'calendar',
  component: CalendarComponent
}
];

@NgModule({
    declarations: [
        SettingComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
    exports: [RouterModule, SettingComponent]
})
export class PageRoutingModule { }
