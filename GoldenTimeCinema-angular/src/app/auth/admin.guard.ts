import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // If user role is not admin, redirect to login page and delete token in local storage
    if (!this.authService.isAdmin() === next.data.isAdmin) {
      this.router.navigateByUrl("/login");
      this.authService.deleteToken();
      return false;
    }

    return true;
  }
}
