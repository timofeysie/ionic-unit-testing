import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonPage } from './lesson';

@NgModule({
  declarations: [
    LessonPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonPage),
  ],
  exports: [
    LessonPage
  ]
})
export class LessonPageModule {}
