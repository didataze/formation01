import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemonstratorRoutingModule } from './demonstrator-routing.module';
import { DemonstratorRootComponent } from './demonstrator-root/demonstrator-root.component';
import { ListeElementComponent } from './liste-element/liste-element.component';
import { DetailElementComponent } from './detail-element/detail-element.component';
import {DemonstratorService} from './demonstrator.service';
import {WidgetModule} from '../core/widget/widget.module';
import {BrowserModule} from '@angular/platform-browser';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  ButtonModule, CalendarModule, CardModule, ChartModule, CheckboxModule,
  DialogModule,
  DropdownModule, GalleriaModule, InputSwitchModule, InputTextareaModule,
  InputTextModule, LightboxModule,
  ListboxModule,
  MultiSelectModule, OverlayPanelModule,
  PanelMenuModule, RadioButtonModule, ScrollPanelModule, TooltipModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    WidgetModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    MultiSelectModule,
    PanelModule,
    PanelMenuModule,
    ListboxModule,
    CardModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    GalleriaModule,
    CardModule,
    ChartModule,
    PanelModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    ScrollPanelModule,
    TooltipModule,
    InputSwitchModule,
    LightboxModule,
    DemonstratorRoutingModule
  ],
  declarations: [DemonstratorRootComponent, ListeElementComponent, DetailElementComponent],
  exports: [DemonstratorRootComponent],
  providers: [DemonstratorService]
})
export class DemonstratorModule { }
