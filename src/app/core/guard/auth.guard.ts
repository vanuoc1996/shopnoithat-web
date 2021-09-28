import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from "../../extrapages/login/login.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginComponent: LoginComponent
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    debugger;
    if (this.loginComponent.isCheckLogin){
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return true;
  }

}
