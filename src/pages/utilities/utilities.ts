import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

export class PercentWeight {
  constructor(percValue: number, weightValue: number) {}
}

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

  convertTo(unit: string) {
    this.weight *= (unit == 'Kg' ? this.toKgFactor : this.toLbFactor);
  }

  getPercValues(): PercentWeight[] {
    console.log('getperc');
    let aux: PercentWeight[] = [];
    for (var perc = 105; perc > 0; perc-= 5) {
      aux.push({percValue: perc, weightValue: this.weight * (perc/100) });
    }
    return aux;
  }

}
