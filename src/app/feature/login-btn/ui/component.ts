import {
  AfterContentInit, Component, ElementRef, Inject, NgZone, ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'app/shared/states/app-state';
import { TelegramAuthDTO } from 'cy-domain/src/subject/domain-data/user/user-authentification/a-params';
import { UserAuthentificationActionDod, UserAuthentificationServiceParams } from 'cy-domain/src/subject/domain-data/user/user-authentification/s-params';
import { Logger } from 'rilata/src/common/logger/logger';
import { SubjectApi } from 'subject/shared/backend-api/subject-api.service';

@Component({
  selector: 'login-btn',
  template: `
    <div #script>
      <ng-content></ng-content>
    </div>
  `,
})
export class LoginButtonComponent implements AfterContentInit {
  @ViewChild('script', { static: true }) script!: ElementRef;

  constructor(
    @Inject('userAuthApi') private userAuthApi: SubjectApi,
    private ngZone: NgZone,
    private appstate: AppState,
    @Inject('logger') private logger: Logger,
    private router: Router,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).onTelegramAuth = (user: TelegramAuthDTO) => {
      const actionDod: UserAuthentificationActionDod = {
        meta: {
          name: 'userAuthentification',
          actionId: crypto.randomUUID(),
          domainType: 'action',
        },
        attrs: user,
      };
      this.ngZone.run(async () => {
        const result = await this.userAuthApi.request<UserAuthentificationServiceParams>(actionDod);
        if (result.isFailure()) {
          const err = result.value;
          if (err.meta.name === 'TelegramUserDoesNotExistError') {
            this.router.navigate(['/error-page/TelegramUserDoesNotExistError']);
          }
          if (err.meta.name === 'ManyAccountNotSupportedError') {
            this.router.navigate(['/error-page/ManyAccountNotSupportedError']);
          }
        } else {
          this.appstate.setUser(user);
        }
      });
    };
  }

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?5';
    script.setAttribute('data-telegram-login', 'rennat_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    element.parentElement.replaceChild(script, element);
  }

  ngAfterContentInit(): void {
    this.convertToScript();
  }
}
