import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DictionaryPage } from './dictionary';

@NgModule({
  declarations: [
    DictionaryPage,
  ],
  imports: [
    IonicPageModule.forChild(DictionaryPage),
  ],
  exports: [
    DictionaryPage
  ]
})
export class DictionaryPageModule {}
