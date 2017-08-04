import { SharedModule } from "../../app/shared.module";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimersPage } from './timers';

@NgModule({
  declarations: [
    TimersPage,
  ],
  imports: [
    IonicPageModule.forChild(TimersPage),
    SharedModule
  ],
  exports: [
    TimersPage
  ]
})
export class TimersPageModule {}
