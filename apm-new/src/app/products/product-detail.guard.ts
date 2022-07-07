import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private _router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const id: number = Number(route.params['id']);
      if (id <= 0 || !Number.isFinite(id)) {
        alert("Please provide a valid ID");
        this._router.navigateByUrl('/products');
        return false;
      }
      return true;
  }
}
