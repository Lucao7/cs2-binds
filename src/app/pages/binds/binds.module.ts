import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindsRoutingModule } from './binds-routing.module';
import { BindsComponent } from './binds.component';


@NgModule({
  declarations: [
    BindsComponent
  ],
  imports: [
    CommonModule,
    BindsRoutingModule
  ]
})
export class BindsModule { }
