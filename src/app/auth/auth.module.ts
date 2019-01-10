import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginRootComponent} from './login-root/login-root.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {FormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CardModule} from "primeng/components/card/card";
import {ButtonModule} from "primeng/components/button/button";
import {PanelModule} from "primeng/components/panel/panel";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    PanelModule,
    AuthRoutingModule
  ],
  declarations: [LoginRootComponent, LoginComponent, PageNotFoundComponent],
  exports: [LoginRootComponent],
  providers: [AuthService, AuthGuardService]
})
export class AuthModule {
}
