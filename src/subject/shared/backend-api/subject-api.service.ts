import { Injectable } from '@angular/core';
import { AngularBackendApi } from 'app/shared/angularBackendApi';

@Injectable({
  providedIn: 'root',
})
export class SubjectApi extends AngularBackendApi {
  protected moduleUrl: string = 'http://localhost:3000/subject';
}
