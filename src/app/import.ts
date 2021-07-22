import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {TableModule} from "primeng/table";
import {AppComponent} from "./app.component";
import {TableComponent} from "./modeles/admin/table/table.component";
import {ChairComponent} from "./modeles/admin/chair/chair.component";
import {Page404Component} from "./extrapages/page404/page404.component";
import {CalendarComponent} from "./modeles/admin/calendar/calendar.component";
import {CalendarModule} from "primeng/calendar";


export const IMPORT = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  TableModule,
  CalendarModule
  ]
export const DECLARATIONS = [
  AppComponent,
  TableComponent,
  ChairComponent,
  Page404Component,
  CalendarComponent
]