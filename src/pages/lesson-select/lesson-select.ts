import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lesson-select',
  templateUrl: 'lesson-select.html',
})
export class LessonSelectPage {

  lessons: Object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    try {
      this.lessons = this.navParams.get('module').lessons;
    } catch (err) {
      // this will catch an error if the page refreshes when it's on a lesson page
      console.log('no module nav param');
    }
  }

  openLesson(lesson) {
        this.navCtrl.push('LessonPage', {lesson: lesson});
    }

}
