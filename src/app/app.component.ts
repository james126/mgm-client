import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app-root',
	template: `<div id="page-container">
					<div id="content-wrap">
						<mgm-header [currentRoute]="currentRoute"></mgm-header>
						<router-outlet (activate)="setHeader()"></router-outlet>
						<mgm-footer></mgm-footer>
					</div>
				</div>`,
	styles: [`#page-container {
				position: relative;
				min-height: 100vh;
			}
			#content-wrap {
				padding-bottom: 4.5rem; /* Footer height */
			}`],
})
export class AppComponent {
	currentRoute: string = '';

	constructor(private route: Router) {
	}

	setHeader() {
		let path = this.route.url.replace(/^\//, '');
		this.currentRoute = decodeURIComponent(path);
	}
}
