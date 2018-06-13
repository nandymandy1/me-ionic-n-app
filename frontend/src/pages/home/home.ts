import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendPage } from '../send/send';
import { ShowPage } from '../show/show';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  /* App Starts Here */
  sendReqs(){
    this.navCtrl.push(SendPage);
  }

  showReqs(){
    this.navCtrl.push(ShowPage);
  }

}
