import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { DashboardGlobalComponent } from './dashboard-global/dashboard-global.component';
import {WidgetModule} from '../core/widget/widget.module';
import {DashboardService} from './dashboard.service';
import {HttpClientModule} from '@angular/common/http';
import { RepresentationCapteurAlgoComponent } from './representation-capteur-algo/representation-capteur-algo.component';
import { EcartMesureComponent } from './ecart-mesure/ecart-mesure.component';
import { DistributionEcartsComponent } from './distribution-ecarts/distribution-ecarts.component';
import {ChartModule} from 'primeng/chart';
import { ImportDataComponent } from './import-data/import-data.component';
import {CardModule, FileUploadModule, MessageService} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FormsModule,
    CardModule,
    FileUploadModule,
    ChartModule,
    HttpClientModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardRootComponent, DashboardGlobalComponent, RepresentationCapteurAlgoComponent, EcartMesureComponent,
    DistributionEcartsComponent, ImportDataComponent],
  exports: [DashboardRootComponent],
  providers: [DashboardService, MessageService]
})
export class DashboardModule { }
