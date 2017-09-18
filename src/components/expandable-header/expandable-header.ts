import { Component, ElementRef, Renderer, Input, QueryList, ContentChildren } from '@angular/core';
import { Content, Item, DomController } from 'ionic-angular';

@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeaderComponent {

	/** To get a reference to the ElementRef for each of the <ion-item> components that will be projected 
	 * into this component we use @ContentChildren and not @ViewChildren because we don't want a reference 
	 * to the components, we want a reference directly to the components ElementRef, so we supply the read property. 
	 * This is going to return us a QueryList that contains ElementRef's for each <ion-item>. 
	 * This is why we give it a type of QueryList<ElementRef>. */
	@ContentChildren(Item, {read: ElementRef}) headerItems: QueryList<ElementRef>;
	/** the scrollArea input which should be supplied a Content component that we will be 
	 * listening for scroll events on. */
	@Input('scrollArea') scrollArea: Content;

	headerHeight: number = 0;

	constructor(
		private element: ElementRef, 
		private renderer: Renderer, 
		private domCtrl: DomController) {
		
	}

	/** run some code as soon as the components view (template) is initialised */
	ngAfterViewInit() {
        this.domCtrl.read(() => {
			// loop through headerItems QueryList and calculate a total height for all of the items
            this.headerItems.forEach((item) => {
                this.headerHeight += item.nativeElement.clientHeight;
            });
            // A bit of extra adding
            this.headerHeight += 10;
        });
        this.domCtrl.write(() => {
			// set the init height and transition
            this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
            this.headerItems.forEach((item) => {
                this.renderer.setElementStyle(item.nativeElement, 'transition', 'opacity 0.5s linear');
            });
        });
		// listen for scroll events
        this.scrollArea.ionScroll.subscribe((ev) => {
            this.resizeHeader(ev);
        });
    }

	resizeHeader(ev) {
		// keep track of which items need to be hidden or displayed
        let itemsToHide = [];
        let itemsToShow = [];
		// calculate the new header size
        let newHeaderHeight = this.headerHeight - ev.scrollTop;
        if (newHeaderHeight < 0) {
            newHeaderHeight = 0;
        }
        this.domCtrl.read(() => {
            this.headerItems.forEach((item) => {
                let totalHeight = item.nativeElement.offsetTop + item.nativeElement.clientHeight;
				// If an item no longer fits inside of the header, it will be hidden, otherwise shown
                if (totalHeight > newHeaderHeight) {
                    itemsToHide.push(item);
                } else if (totalHeight <= newHeaderHeight) {
                    itemsToShow.push(item);
                }
            });            
        });
        this.domCtrl.write(() => {
			// set the new header height
            this.renderer.setElementStyle(this.element.nativeElement, 'height', newHeaderHeight + 'px');
			// hide and show elements accordingly
            for(let item of itemsToHide) {
                this.renderer.setElementStyle(item.nativeElement, 'opacity', '0');
            }
            for(let item of itemsToShow) {
                this.renderer.setElementStyle(item.nativeElement, 'opacity', '1.0');
            }
        });
    }

}
