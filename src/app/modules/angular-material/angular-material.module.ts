import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  exports: [
    ClipboardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
