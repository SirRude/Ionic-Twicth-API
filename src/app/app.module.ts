import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StreamingMedia} from '@ionic-native/streaming-media';
import {  HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LinksPage } from '../pages/links/links';
import { RaizQtPage } from '../pages/raiz-qt/raiz-qt';
import { NugiyenPage } from '../pages/nugiyen/nugiyen';
import { CohhCarnagePage } from '../pages/cohh-carnage/cohh-carnage';
import { TestVideoHtml5SCriptPage } from '../pages/test-video-html5-s-cript/test-video-html5-s-cript';
import { TwitchApiProvider } from '../providers/twitch-api/twitch-api';
import { PoeTestPage } from '../pages/poe-test/poe-test';
import { StreamPage } from '../pages/stream/stream';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LinksPage,
    RaizQtPage,
    NugiyenPage,
    CohhCarnagePage,
    TestVideoHtml5SCriptPage,
    PoeTestPage,
    StreamPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LinksPage,
    RaizQtPage,
    NugiyenPage,
    CohhCarnagePage,
    TestVideoHtml5SCriptPage,
    PoeTestPage,
    StreamPage,

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TwitchApiProvider
  ]
})
export class AppModule {}
