import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {

  constructor(
      private menu: MenuController,
      public  afAuth: AngularFireAuth
  ) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }



  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
