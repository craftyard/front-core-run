import { JWTTokens } from 'rilata/src/app/jwt/types';
import { Observable } from 'rxjs';
import { TelegramAuthDTO } from 'cy-domain/src/subject/domain-data/user/user-authentification/a-params';

export interface Authentificationable {
    userAuthentification(telegramAuthDTO: TelegramAuthDTO): Observable<JWTTokens>;
}
