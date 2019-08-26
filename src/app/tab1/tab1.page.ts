import { Component } from '@angular/core';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  hash: any;
  constructor(private smsRetriever: SmsRetriever) { }

  genHash() {
    // This function is to get hash string of APP.
    // * @return {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
    this.smsRetriever.getAppHash()
      .then((res: any) => {
        console.log(res);
        alert(res);
        this.hash = res;
      })
      .catch((error: any) => console.error(error));
  }


  retriveSMS() {
    console.log('Watching SMS');
    this.smsRetriever.startWatching()
      .then((res: any) => {
        console.log(res);
        //  <#> 323741 is your 6 digit OTP for MyApp. LDQEGVDEvcl
        const otp = res.Message.toString().substr(4, 6);
        alert(`OTP Received - ${otp}`);
      })
      .catch((error: any) => console.error(error));
  }


}
