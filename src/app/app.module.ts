import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { EventPageModule } from './event/event.module';
import { Event2PageModule } from './event2/event2.module';

export const firebaseConfig = {
    apiKey: "AIzaSyBTnMteLd0stYCnmRRSd2EP3YJYRa4BKSk",
    authDomain: "doctolib-4279c.firebaseapp.com",
    databaseURL: 'https://doctolib-4279c.firebaseio.com',
    projectId: "doctolib-4279c",
    storageBucket: "doctolib-4279c.appspot.com",
    messagingSenderId: "466371027168",
    appId: "1:466371027168:web:4106d92d68b587e8d3f085",
    measurementId: "G-SSB9N506CG"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
      EventPageModule,
      Event2PageModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
