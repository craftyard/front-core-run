import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'error-page',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class ErrorPageComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) { }

  errorText = '';

  error!:string;

  ngOnInit(): void {
    this.error = this.activateRoute.snapshot.params.id;
    switch (this.error) {
      case '404':
        this.errorText = 'Извините, запрашиваемая страница не найдена. Пожалуйста, убедитесь, что вы используете правильный URL, или вернитесь на главную страницу.';
        break;
      case '403':
        this.errorText = 'Извините, у вас нет доступа к этой странице. Пожалуйста, свяжитесь с администратором для получения необходимых разрешений.';
        break;
      case '500':
        this.errorText = 'Извините, произошла внутренняя ошибка сервера. Мы работаем над устранением проблемы. Пожалуйста, повторите ваш запрос позже.';
        break;
      case 'TelegramUserDoesNotExistError':
        this.errorText = 'У вас нет аккаунта.';
        break;
      case 'ManyAccountNotSupportedError':
        this.errorText = 'У вас с одним аккаунтом telegram имеется много аккаунтов, к сожалению сейчас это не поддерживается. Обратитесь в техподдержку, чтобы вам помогли решить эту проблему.';
        break;
      default:
        this.errorText = 'Неизвестная ошибка.';
        break;
    }
  }
}
