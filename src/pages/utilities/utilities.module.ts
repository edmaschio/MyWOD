import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UtilitiesPage } from './utilities';

@NgModule({
  declarations: [
    UtilitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(UtilitiesPage),
  ],
  exports: [
    UtilitiesPage
  ]
})
export class UtilitiesPageModule {}
