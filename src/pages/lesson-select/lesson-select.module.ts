import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonSelectPage } from './lesson-select';

@NgModule({
  declarations: [
    LessonSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonSelectPage),
  ],
  exports: [
    LessonSelectPage
  ]
})
export class LessonSelectPageModule {}
