import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstructionPage } from './instruction';

@NgModule({
  declarations: [
    InstructionPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructionPage),
  ],
  exports: [
    InstructionPage
  ]
})
export class InstructionPageModule {}
