import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardRootComponent} from './dashboard-root/dashboard-root.component';
import {DashboardGlobalComponent} from './dashboard-global/dashboard-global.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'dashboard',
    // canActivate: [AuthGuardService],
    component: DashboardRootComponent,
    children: [
      {path: 'global', component: DashboardGlobalComponent},
      {path: '', pathMatch: 'full', redirectTo: 'global'},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
