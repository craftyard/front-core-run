import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { LogOutComponent } from 'app/feature/logout-btn/ui/component';
import { CurrentUserComponent } from 'app/entities/user-header/ui/component';
import { LoginButtonComponent } from 'app/feature/login-btn/ui/component';
import { AuthPageComponent } from 'app/pages/auth/ui/component';
import { CommonModule } from '@angular/common';
import { AppHeader } from 'app/widgets/app-header/component';
import { AppComponent } from 'app/component';
import { AppState } from 'app/shared/states/app-state';
import { AppTreeComponent } from 'app/widgets/app-tree/component';
import { AppPageComponent } from 'app/pages/app-page/ui/component';
import { AppRoutingModule } from 'app/router';
import { SubjectModuleState } from 'subject/module-state';
import { AuthGuard } from 'app/shared/guards/auth.guard';
import { DomainModuleState } from 'app/shared/states/domain-module-state';
import { WorkShopModuleState } from 'workshop/module-state';
import { TreeItemComponent } from 'app/entities/tree-item/ui/component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TextElementComponent } from 'app/shared/ui-kit/text-element/component';
import { AccordionComponent } from 'app/shared/ui-kit/accordion/component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';

const domainModuleStates: DomainModuleState[] = [
  new WorkShopModuleState(),
  new SubjectModuleState(),
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppTreeComponent,
    LogOutComponent,
    CurrentUserComponent,
    LoginButtonComponent,
    AuthPageComponent,
    AppPageComponent,
    TreeItemComponent,
    TextElementComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
  ],
  providers: [AppState, AuthGuard, {
    provide: 'domainModuleStates', useValue: domainModuleStates,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  exports: [
    TextElementComponent,
    AccordionComponent,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class AppModule { }
