import { getScrollData } from 'ionic-angular/components/input/input';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataTermsProvider } from '../../providers/data-terms/data-terms';

/**
* Generated class for the LoadDataPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-load-data',
  templateUrl: 'load-data.html',
  providers: [DataTermsProvider]
})
export class LoadDataPage {

  newsData: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private termsProvider: DataTermsProvider, public loadingCtrl: LoadingController) {

      this.loading = this.loadingCtrl.create({
        content: `
        <ion-spinner></ion-spinner>`
      });

      this.getdata();
  }

  getdata() {
    this.termsProvider.getJsonData().subscribe(
      result => {
        console.log(result);
        this.newsData = result.terms;
        console.log("Success : " + this.newsData);
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        console.log('getData completed');
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadDataPage');
  }

}
