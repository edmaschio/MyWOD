import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  cards: any;
  activity: string = 'my-activity';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cards = new Array(10);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }

}
