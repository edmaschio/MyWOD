import { LoadDataPage } from '../pages/load-data/load-data';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { ActivityPage } from "../pages/activity/activity";
import { DailyWodsPage } from '../pages/daily-wods/daily-wods';
import { BoxNewsPage } from '../pages/box-news/box-news';
import { CalendarPage } from '../pages/calendar/calendar';
import { BenchmarkWodsPage } from '../pages/benchmark-wods/benchmark-wods';
import { PersonalBestsPage } from '../pages/personal-bests/personal-bests';
import { TimersPage } from "../pages/timers/timers";
import { TheWodMachinePage } from '../pages/the-wod-machine/the-wod-machine';
import { SettingsPage } from '../pages/settings/settings';
import { UtilitiesPage } from "../pages/utilities/utilities";
import { InstructionPage } from "../pages/instruction/instruction";
import { DictionaryPage } from "../pages/dictionary/dictionary";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ActivityPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      
      { title: 'LoadPage', icon: 'flame', component: LoadDataPage },
      { title: 'Activity', icon: 'flame', component: ActivityPage },
      { title: 'Daily WODs', icon: 'train', component: DailyWodsPage },
      { title: 'Box News', icon: 'paper', component: BoxNewsPage },
      { title: 'Calendar', icon: 'calendar', component: CalendarPage },
      { title: 'Benchmark WODs', icon: 'medal', component: BenchmarkWodsPage },
      { title: 'Personal Bests', icon: 'trophy', component: PersonalBestsPage },
      { title: 'Dictionary', icon: 'clipboard', component: DictionaryPage },
      { title: 'Timers', icon: 'alarm', component: TimersPage },
      { title: 'Utilities', icon: 'calculator', component: UtilitiesPage },
      { title: 'Instruction', icon: 'book', component: InstructionPage },      
      { title: 'The WOD Machine', icon: 'settings', component: TheWodMachinePage },
      { title: 'Settings', icon: 'options', component: SettingsPage },
      { title: 'List', icon: 'albums', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
