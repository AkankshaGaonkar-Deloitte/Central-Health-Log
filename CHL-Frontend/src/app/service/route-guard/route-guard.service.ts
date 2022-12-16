import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isUserLoggedIn())
      return true;
      this.router.navigate(['login']);
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('user-id')
    return !(user===null);
  }
}
