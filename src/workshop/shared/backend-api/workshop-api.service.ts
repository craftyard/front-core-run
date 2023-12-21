import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetUcResultDto } from 'rilata2/src/app/use-case/types';
import { Observable } from 'rxjs';
import { GetMyWorkshopUcParams, GetMyWorkshopActionDod } from 'workshop-domain/src/workshop/domain-data/workshop/get-my-workshop/uc-params';

@Injectable({
  providedIn: 'root',
})
export class WorkshopApi {
  constructor(private http: HttpClient) {}

  protected url = '';

  getMyWorkshop(): Observable<GetUcResultDto<GetMyWorkshopUcParams>> {
    const actionDod: GetMyWorkshopActionDod = {
      actionName: 'getMyWorkshop',
      body: {},
    };
    return this.http.post<GetUcResultDto<GetMyWorkshopUcParams>>(this.url, actionDod);
  }
}
