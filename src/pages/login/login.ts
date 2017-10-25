import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  licenseKey: string = '';
  loading: any;
  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.presentLoading();
    this.authProvider.checkKey(this.licenseKey).subscribe((res) => {
      if(res){
        this.loading.dismiss().then(() => {
          this.navCtrl.setRoot('HomePage');
        });
      }
    }, (err) => {
      this.loading.dismiss();
      console.log(err);
    });   
  }

  presentLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    this.loading.present();
  }

}