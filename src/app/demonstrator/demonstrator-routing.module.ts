import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemonstratorRootComponent} from './demonstrator-root/demonstrator-root.component';
import {ListeElementComponent} from './liste-element/liste-element.component';
import {DetailElementComponent} from './detail-element/detail-element.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'demonstrator',
    // canActivate: [AuthGuardService],
    component: DemonstratorRootComponent,
    children: [
      {path: 'list', component: ListeElementComponent},
      {path: 'element/:id', component: DetailElementComponent},
      {path: '', pathMatch: 'full', redirectTo: 'list'},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemonstratorRoutingModule { }
