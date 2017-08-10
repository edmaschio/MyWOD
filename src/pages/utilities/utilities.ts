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
  unit: string = 'lb';

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
  
  convertLbToKg(): number {
    return this.weight * this.toKgFactor;
  }

  convertKgToLb(): number {
    return this.weight * this.toLbFactor;
  }  

  displayValue(): number {
    return this.unit == 'lb' ? this.convertLbToKg() : this.convertKgToLb();
  }

  private convertTo(unit: string) {
    console.log(unit);
    if (unit == 'kg') {
      this.weight = this.weight * this.toKgFactor;
    } else if (unit == 'lb') {
      this.weight = this.weight * this.toLbFactor;
    }
  }
}
