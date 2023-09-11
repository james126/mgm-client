import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	currentRoute: string = 'index';

	constructor(private route: Router) {
	}

	setHeader() {
		let path = this.route.url.replace(/^\//, '');
		this.currentRoute = decodeURIComponent(path);
	}
}
