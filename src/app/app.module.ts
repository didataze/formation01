import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DemonstratorModule} from './demonstrator/demonstrator.module';
import {HttpClientModule} from '@angular/common/http';
import {WidgetModule} from './core/widget/widget.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemonstratorModule,
    DashboardModule,
    WidgetModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
