import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppState } from 'app/shared/states/app-state';

@Injectable()
export class AuthGuard {
  constructor(@Inject(AppState) private appService: AppState) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (localStorage.getItem('user')) {
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
