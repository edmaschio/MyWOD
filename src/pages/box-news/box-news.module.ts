import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoxNewsPage } from './box-news';

@NgModule({
  declarations: [
    BoxNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(BoxNewsPage),
  ],
  exports: [
    BoxNewsPage
  ]
})
export class BoxNewsPageModule {}
