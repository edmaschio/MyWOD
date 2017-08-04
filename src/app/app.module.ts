import { SharedModule } from './shared.module';
import { HttpModule } from '@angular/http';
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
import { UtilitiesPage } from "../pages/utilities/utilities";
import { InstructionPage } from "../pages/instruction/instruction";
import { DictionaryPage } from "../pages/dictionary/dictionary";
import { LoadDataPage } from '../pages/load-data/load-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataTermsProvider } from '../providers/data-terms/data-terms';
import { CountdownTimerComponent } from '../components/countdown-timer/countdown-timer';

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
    UtilitiesPage,
    InstructionPage,
    DictionaryPage,
    ListPage,
    LoadDataPage,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SharedModule
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
    UtilitiesPage,
    InstructionPage,    
    DictionaryPage,
    ListPage,
    LoadDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataTermsProvider
  ]
})
export class AppModule { }
