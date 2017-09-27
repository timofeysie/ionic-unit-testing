import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header';
import { ErrorMessagesComponent } from './error-messagse/error-messages';
@NgModule({
	declarations: [ExpandableHeaderComponent,
    ErrorMessagesComponent],
	imports: [IonicModule],
	exports: [ExpandableHeaderComponent,
    ErrorMessagesComponent]
})
export class ComponentsModule {}
