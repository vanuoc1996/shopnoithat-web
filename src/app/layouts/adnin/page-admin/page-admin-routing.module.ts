import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "../../../modeles/admin/table/table.component";
import {ChairComponent} from "../../../modeles/admin/chair/chair.component";
import {CalendarComponent} from "../../../modeles/admin/calendar/calendar.component";
import {SettingComponent} from "../setting/setting.component";
import {MainComponent} from "../main-admin/main.component";
import {CommentComponent} from "../../../modeles/admin/comment/comment.component";
import {CustomerComponent} from "../../../modeles/admin/customer/customer.component";
import {IncomeComponent} from "../../../modeles/admin/income/income.component";
import {InventoryComponent} from "../../../modeles/admin/inventory/inventory.component";
import {OrderComponent} from "../../../modeles/admin/order/order.component";
import {ProductComponent} from "../../../modeles/admin/product/product.component";

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'table',
  component: TableComponent
}, {
  path: 'chair',
  component: ChairComponent
}, {
  path: 'calendar',
  component: CalendarComponent
},
  {
    path: 'comment',
    component: CommentComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  }
  ,{
    path: 'income',
    component: IncomeComponent
  }
  ,{
    path: 'inventory',
    component: InventoryComponent
  }
  ,{
    path: 'order',
    component: OrderComponent
  }
  ,{
    path: 'product',
    component: ProductComponent
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
export class PageAdminRoutingModule { }
