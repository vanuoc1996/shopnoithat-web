import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {LoginComponent} from './admin/login/login.component'

// @ts-ignore
const routes: Routes = [
  { path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', component: LoginComponent},
  {
    path: '', component: HomePageComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent
      }
    ]
  },
  {
    path: '**',
    component: HomePageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
