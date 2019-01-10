import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthService} from './auth.service';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'login', component: LoginComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService,
    AuthService
  ]


})
export class AuthRoutingModule {
}
