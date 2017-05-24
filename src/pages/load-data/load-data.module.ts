import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadDataPage } from './load-data';

@NgModule({
  declarations: [
    LoadDataPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadDataPage),
  ],
  exports: [
    LoadDataPage
  ]
})
export class LoadDataPageModule {}
