import { NgModule } from '@angular/core';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header';
import { SkeletonCardComponent } from './skeleton-card/skeleton-card';
@NgModule({
	declarations: [ExpandableHeaderComponent,
    SkeletonCardComponent],
	imports: [],
	exports: [ExpandableHeaderComponent,
    SkeletonCardComponent]
})
export class ComponentsModule {}
