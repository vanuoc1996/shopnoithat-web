import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',
    './../../../../assets/admin/css/vertical-layout-light/style.css',
    './../../../../assets/admin/vendors/ti-icons/css/themify-icons.css',
    './../../../../assets/admin/vendors/css/vendor.bundle.base.css',
    './../../../../assets/admin/vendors/select2/select2.min.css',
    './../../../../assets/admin/vendors/select2-bootstrap-theme/select2-bootstrap.min.css',
    './../../../../assets/admin/vendors/feather/feather.css',
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
