import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SendRqsProvider } from '../../providers/send-rqs/send-rqs';
// Barcode Scanner
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {
  a_id:String = "";
  style_no:String = "";
  i_name:String = "";
  size:String = "";
  name:String = "";
  reqTo:String = "";
  floor:String = "";
  section:String = "";
  line:String = "";

  // QR Code
  scannedData: any = {};
  options: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, private sR: SendRqsProvider, public navParams: NavParams,  private toastController: ToastController, public scanner: BarcodeScanner ) {

  }

  ionViewDidLoad() {

  }

  validate(){
    if(this.a_id != "" && this.style_no != "" && this.size != "", this.i_name != "", this.reqTo != "", this.floor != "", this.section != "", this.line != "", this.name != ""){
      this.sendReqs();
    } else {
      let badInputToast = this.toastController.create({
        message: "Please fill in all details of the requsitions",
        duration: 2500
      });
      badInputToast.present();
    }
  }

  sendReqs(){
    
      let newReq = {
        name: this.name,
        a_id: this.a_id,
        style_id: this.style_no,
        line:this.line,
        section:this.section,
        floor:this.floor,
        i_name:this.i_name,
        size:this.size,
        reqTo: this.reqTo
      };
      // make API Call
      this.sR.sendReqs(newReq).subscribe(res => {
        let successInputToast = this.toastController.create({
          message: res.msg,
          duration: 2500
        });
        successInputToast.present();
      });
      this.a_id = "";
      this.style_no = "",
      this.size = "";
      this.i_name = "";
      this.reqTo = ""; 
      this.floor = "", 
      this.section = ""; 
      this.line = ""; 
      this.name = "";
    }

    // Open qr code scanner
      // to scan the data
  openQr(){
    this.options = {
      prompt: "Scan your barcode"
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
      this.a_id = this.scannedData.text;
    },
    (err) => {
      console.log(err);
    });
  }

}