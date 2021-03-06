import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageAdminComponent} from "./layouts/adnin/page-admin/page-admin.component";
import {Page404Component} from "./extrapages/page404/page404.component";
// import {LoginComponent} from "./extrapages/login/login.component";
import {LoginComponent} from "./extrapages/login/login.component";
import {DetailComponent} from "./store/detail/detail.component";
import {AuthGuard} from "./core/guard/auth.guard";
import {PageWebComponent} from "./layouts/website/page-web/page-web.component";

const routes: Routes = [
  {
    path: 'web',
    component: PageWebComponent,
    loadChildren: () => import('./layouts/website/page-web/page-web.module').then(m => m.PageWebModule)
  },
  {
    path: 'admin',
    component: PageAdminComponent,
    loadChildren: () => import('./layouts/adnin/page-admin/page-admin.module').then(m => m.PageAdminModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '',
    component: PageWebComponent,
    loadChildren: () => import('./layouts/website/page-web/page-web.module').then(m => m.PageWebModule)
  },
  // {
  //   path: '',
  //   component: PageAdminComponent,
  //   loadChildren: () => import('./layouts/adnin/page-admin/page-admin.module').then(m => m.PageAdminModule)
  // },
  {
    path: '**',
    component: Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
