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
        {title: 'Module One', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Two', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Three', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Four', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Five', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]}
    ];
  }

  openModule(module){
    this.navCtrl.push('LessonSelectPage', { module: module });
  }

}
