import { NgModule } from '@angular/core';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header';
import { ErrorMessagesComponent } from './error-messagse/error-messages';
@NgModule({
	declarations: [ExpandableHeaderComponent,
    ErrorMessagesComponent],
	imports: [],
	exports: [ExpandableHeaderComponent,
    ErrorMessagesComponent]
})
export class ComponentsModule {}
