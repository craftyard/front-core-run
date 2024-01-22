// src/root.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConsoleLogger } from 'rilata/src/common/logger/console-logger';
import { RootComponent } from './component';
import { RootRoutingModule } from './router';
import { SubjectApi } from './subject/shared/backend-api/subject-api.service';
import { DomainModuleState } from './app/shared/states/domain-module-state';
import { WorkShopModuleState } from './workshop/module-state';
import { SubjectModuleState } from './subject/module-state';
import { SubjectBackendApiMock } from './subject/shared/backend-api/subject-backend-mock';

const domainModuleStates: DomainModuleState[] = [
  new WorkShopModuleState(),
  new SubjectModuleState(),
];
@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [RootComponent],
  providers: [
    { provide: 'logger', useClass: ConsoleLogger },
    {
      provide: 'userAuthApi', useClass: SubjectApi,
    },
    {
      provide: 'mockSubjectApi', useClass: SubjectBackendApiMock,
    },
    {
      provide: 'domainModuleStates', useValue: domainModuleStates,
    }],
})
export class RootModule { }
