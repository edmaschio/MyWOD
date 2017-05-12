import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalBestsPage } from './personal-bests';

@NgModule({
  declarations: [
    PersonalBestsPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalBestsPage),
  ],
  exports: [
    PersonalBestsPage
  ]
})
export class PersonalBestsPageModule {}
