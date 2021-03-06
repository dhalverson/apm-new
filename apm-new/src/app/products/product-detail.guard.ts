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
      const id: number = Number(route.paramMap.get('id'));
      if (id <= 0 || !Number.isFinite(id)) {
        alert("Please provide a valid ID");
        this._router.navigate(['/products']);
        return false;
      }
      return true;
  }
}
