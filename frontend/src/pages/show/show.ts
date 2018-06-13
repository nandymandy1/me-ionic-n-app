import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { SendRqsProvider } from '../../providers/send-rqs/send-rqs';
import { IssueReqPage } from '../issue-req/issue-req';

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {

  approvals:Array<any>;
  issues:Array<any>;
  irs:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sR: SendRqsProvider, private toastController: ToastController ) {
  }

  ionViewDidLoad() {
    this.getA();
    this.getI();
    this.getIR();
  }
  // get all the requsitions which are waiting to be approved on loading
  getA(){
    this.sR.getApprovals().subscribe(res => {
      this.approvals = res.req;
    });
  }

  // get all the requsitions which are waiting to be issued on loading
  getI(){
    this.sR.getIssues().subscribe(res => {
      this.issues = res.requ;
    });
  }

  // get all the issued Requsitons
  getIR(){
    this.sR.getIRS().subscribe(res => {
      this.irs = res.requ;
    });
  }

  // Approve
  approve(id, key){
    this.sR.approves(id).subscribe(res => {
      if(res.success){
        let successInputToast = this.toastController.create({
          message: res.msg,
          duration: 2500
        });
        successInputToast.present();
        this.approvals.splice(key, 1);
        this.getI();
      } else {
        let failInputToast = this.toastController.create({
          message: "Failed to Approve the Requsition",
          duration: 2500
        });
        failInputToast.present();
      }
    });
  }

  // Issue Requsition Page Push
  viewIssuePage(id){
    this.navCtrl.push(IssueReqPage, {id: id});
  }

}
