import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * HomePage page.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
   	modules: Object[] = [];
  	constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
	this.modules = [
            {title: 'Module One', description: 'Test'},
            {title: 'Module Two', description: 'Test'},
            {title: 'Module Three', description: 'Test'},
            {title: 'Module Four', description: 'Test'},
            {title: 'Module Five', description: 'Test'}
        ];
  }

}
