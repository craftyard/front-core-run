import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authentificationable } from 'app/shared/user/authentificationable';
import { JWTTokens } from 'rilata2/src/app/jwt/types';
import { Observable } from 'rxjs';
import { TelegramAuthDTO } from 'workshop-domain/src/subject/domain-data/user/user-authentification/a-params';

@Injectable({
  providedIn: 'root',
})
export class SubjectApi implements Authentificationable {
  urlApi = 'login';

  constructor(private http: HttpClient) { }

  userAuthentification(telegramAuthDTO:TelegramAuthDTO): Observable<JWTTokens> {
    return this.http.post<JWTTokens>(this.urlApi, telegramAuthDTO);
  }
}
