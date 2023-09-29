import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindsComponent } from './binds.component';

const routes: Routes = [{ path: '', component: BindsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindsRoutingModule { }
