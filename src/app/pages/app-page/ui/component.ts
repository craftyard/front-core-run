import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/shared/states/app-state';
import { TelegramAuthDTO } from 'app/shared/user/telegram-auth-dto';

@Component({
  selector: 'app-page',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppPageComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  appUser: TelegramAuthDTO | undefined = undefined;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private appState: AppState) {
    this.appState.appUser$.subscribe((user) => {
      this.appUser = user;
    });
  }

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
  }
}