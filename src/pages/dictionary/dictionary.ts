import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';

import { DataTermsProvider } from '../../providers/data-terms/data-terms';

@IonicPage()
@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html',
})
export class DictionaryPage {

  searchTerm: string ='';
  searchControl: FormControl;
  items: Array<{ term: string, description: string }>;
  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public dataService: DataTermsProvider) {

    this.searchControl = new FormControl();

  }

  ionViewDidLoad() {

    this.setFilteredItems();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

        this.searching = false;
        this.setFilteredItems();

    });
  }

  onSearchInput(){
    this.searching = true;
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }  

}
