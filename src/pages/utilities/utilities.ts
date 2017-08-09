import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-utilities',
  templateUrl: 'utilities.html',
})
export class UtilitiesPage {
  toKgFactor: number = .45359237;
  toLbFactor: number = 2.2046226218488;
  weight: number = 225;

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
  
  private convertLbToKg(): number {
    return this.weight * this.toKgFactor;
  }

  private convertKgToLb(): number {
    return this.weight * this.toLbFactor;
  }  
}
