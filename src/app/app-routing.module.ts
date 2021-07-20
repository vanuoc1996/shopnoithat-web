import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent} from "./layouts/page/page.component";

const routes: Routes = [

  {
    path: 'admin',
    component: PageComponent,
    loadChildren: () => import('./layouts/page/page.module').then(m => m.PageModule)
  },
  {
    path: '',
    component: PageComponent,
    loadChildren: () => import('./layouts/page/page.module').then(m => m.PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
