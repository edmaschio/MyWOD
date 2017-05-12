import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BenchmarkWodsPage } from './benchmark-wods';

@NgModule({
  declarations: [
    BenchmarkWodsPage,
  ],
  imports: [
    IonicPageModule.forChild(BenchmarkWodsPage),
  ],
  exports: [
    BenchmarkWodsPage
  ]
})
export class BenchmarkWodsPageModule {}
