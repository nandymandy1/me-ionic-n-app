import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SendPage } from "../pages/send/send";
import { ShowPage } from '../pages/show/show';
import { IssueReqPage } from '../pages/issue-req/issue-req';

import { SendRqsProvider } from '../providers/send-rqs/send-rqs';
// Barcode Scanner
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SendPage,
    ShowPage,
    IssueReqPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SendPage,
    ShowPage,
    IssueReqPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SendRqsProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
