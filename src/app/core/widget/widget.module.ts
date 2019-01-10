import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {SplitButtonModule, ToolbarModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    SplitButtonModule,
    RouterModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class WidgetModule { }
