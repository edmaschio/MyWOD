import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ActivityPage,
    DailyWodsPage,
    BoxNewsPage,
    CalendarPage,
    BenchmarkWodsPage,
    PersonalBestsPage,
    TimersPage,
    TheWodMachinePage,
    SettingsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivityPage,
    DailyWodsPage,
    BoxNewsPage,
    CalendarPage,
    BenchmarkWodsPage,
    PersonalBestsPage,
    TimersPage,
    TheWodMachinePage,
    SettingsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
