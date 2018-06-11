import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SendRqsProvider } from '../../providers/send-rqs/send-rqs';
import { HomePage } from '../home/home';

/**
 * Generated class for the IssueReqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-issue-req',
  templateUrl: 'issue-req.html',
})
export class IssueReqPage {
  id:String;
  requ:Object;
  d_no: String  = "";
  i_qty: Number;
  rate:Number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sR: SendRqsProvider, private toastController: ToastController) {
  }

  ionViewDidLoad() {
    this.navParams.get("id")
    this.id = this.navParams.get("id")
    this.fetchReq();
  }

  // Fetch requsition details
  fetchReq(){
    this.sR.getReqI(this.id).subscribe(res => {
      if(res.success){
        // store the requsition in the requ object
        this.requ = res.requ;

      } else {
        // pop up the error message
        let failInputToast = this.toastController.create({
          message: "Error: Unable to get the Requsition from the Database (Internal Server Error)",
          duration: 2500
        });
        failInputToast.present();
      }
    });
  }

  validate(){
    if(this.id !="" && this.d_no !="" && this.i_qty !=null && this.rate !=null){
      this.updateReq();
    } else {
      // Pop up the va;idation failure Toast
      let failInputToast = this.toastController.create({
        message: "Error: Please fill in all the details.",
        duration: 2500
      });
      failInputToast.present();
    }
  }

  // Update Issue Requsition Details
  updateReq(){
    let requ = {
      id : this.id,
      d_no: this.d_no,
      i_qty: this.i_qty,
      rate: this.rate
    };

    this.sR.postIssueReq(requ).subscribe(res => {
      if(res.success){
        // Pop up the success toast
        let successInputToast = this.toastController.create({
          message: res.msg,
          duration: 2500
        });
        successInputToast.present();
        this.navCtrl.push(HomePage);
      } else {
        // Pop up the failure Toast
        let failInputToast = this.toastController.create({
          message: "Error: Unable to issue the Requsition",
          duration: 2500
        });
        failInputToast.present();
      }
    });
  }
  

  

}
