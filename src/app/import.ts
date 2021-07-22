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
import {DropdownModule} from "primeng/dropdown";
import {HomeWebComponent} from "./layouts/wepsite/home-web/home-web.component";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./store/login/login.component";
import {DetailComponent} from "./store/detail/detail.component";


export const IMPORT = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  TableModule,
  CalendarModule,
  DropdownModule,
  StoreModule.forRoot({}),
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule
  ]
export const DECLARATIONS = [
  AppComponent,
  TableComponent,
  ChairComponent,
  Page404Component,
  CalendarComponent,
  HomeWebComponent,
  LoginComponent,
  DetailComponent
]
