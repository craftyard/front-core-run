import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../states/app-state';

@Injectable()
export class AuthGuard {
  constructor(@Inject(AppState) private appService: AppState) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
    this.appService.goLogin();
    return false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    return this.canActivate(next, state);
  }
}
