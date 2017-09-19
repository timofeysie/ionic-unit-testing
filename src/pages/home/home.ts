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
        {    
                title: 'Module One', 
                description: 'Test', 
                lessons: [
                    {title: 'lesson 1', content: 'this is the lesson content'},
                    {title: 'lesson 2', content: 'this is the lesson content'}
                ]
            },
            {    
                title: 'Module Two', 
                description: 'Test', 
                lessons: [
                    {title: 'lesson 1', content: 'this is the lesson content'},
                    {title: 'lesson 2', content: 'this is the lesson content'}
                ]
            },
            {    
                title: 'Module Three', 
                description: 'Test', 
                lessons: [
                    {title: 'lesson 1', content: 'this is the lesson content'},
                    {title: 'lesson 2', content: 'this is the lesson content'}
                ]
            },
            {    
                title: 'Module Four', 
                description: 'Test', 
                lessons: [
                    {title: 'lesson 1', content: 'this is the lesson content'},
                    {title: 'lesson 2', content: 'this is the lesson content'}
                ]
            },
            {    
                title: 'Module Five', 
                description: 'Test', 
                lessons: [
                    {title: 'lesson 1', content: 'this is the lesson content'},
                    {title: 'lesson 2', content: 'this is the lesson content'}
                ]
            },
        {title: 'Module Six', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Seven', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Eight', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Nine', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Ten', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Eleven', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Twelve', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Thirteen', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Fourteen', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]},
        {title: 'Module Fifteen', description: 'Test', lessons: [{title: 'lesson 1'},{title: 'lesson 2'}]}
    ];
  }

  openModule(module){
    this.navCtrl.push('LessonSelectPage', { module: module });
  }

}
