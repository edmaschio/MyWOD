import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-utilities',
  templateUrl: 'utilities.html',
})
export class UtilitiesPage {

  weight: number = 100;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setMinus(minWeight: number) {
    this.weight -= minWeight;
    console.log(this.weight);    
  }

  setPlus(addWeight: number) {
    this.weight += addWeight;
    console.log(this.weight);    
  }
  
}
