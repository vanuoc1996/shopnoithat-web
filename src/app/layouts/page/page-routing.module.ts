import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "../../modeles/table/table.component";
import {MainComponent} from "../main/main.component";
import {ChairComponent} from "../../modeles/chair/chair.component";

const routes: Routes = [{
  path: '',
  redirectTo: 'table'
}, {
  path: 'table',
  component: MainComponent
}, {
  path: 'chair',
  component: ChairComponent
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
export class PageRoutingModule { }
