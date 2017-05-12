import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyWodsPage } from './daily-wods';

@NgModule({
  declarations: [
    DailyWodsPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyWodsPage),
  ],
  exports: [
    DailyWodsPage
  ]
})
export class DailyWodsPageModule {}
