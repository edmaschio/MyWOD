import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheWodMachinePage } from './the-wod-machine';

@NgModule({
  declarations: [
    TheWodMachinePage,
  ],
  imports: [
    IonicPageModule.forChild(TheWodMachinePage),
  ],
  exports: [
    TheWodMachinePage
  ]
})
export class TheWodMachinePageModule {}
