import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-utilities',
  templateUrl: 'utilities.html',
})
export class UtilitiesPage {
  toKgFactor: number = .45359237;
  toLbFactor: number = 2.2046226218488;
  weight: number = 225;
  unit: string = 'Lb';

  constructor() { }

  setMinus(minWeight: number) {
    this.weight -= minWeight;
  }

  setPlus(addWeight: number) {
    this.weight += addWeight;
  }
  
  displayValue(): number {
    return this.weight * (this.unit == 'Lb' ? this.toKgFactor : this.toLbFactor);
  }

  displayUnit(): string {
    return (this.unit == 'Lb' ? 'Kg' : 'Lb');
  }

  private convertTo(unit: string) {
    if (unit == 'Kg') {
      this.weight = this.weight * this.toKgFactor;
    } else if (unit == 'Lb') {
      this.weight = this.weight * this.toLbFactor;
    }
  }


}
