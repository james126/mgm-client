import {Component} from '@angular/core';

@Component({
	selector: 'mgm-footer',
	templateUrl: './footer.component.html',
	styles: [
		`#footer {
			position: absolute;
			bottom: 0 !important;
			width: 100%;
			height: 4.5rem; /* Footer height */
		}`
	]
})
export class FooterComponent {
}
