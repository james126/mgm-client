
import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {LogoutService} from "./service/logout.service";

@Component({
	selector: 'mgm-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	@Input() currentRoute: String = '';
	logoutService: LogoutService
	router: Router;

	constructor(router: Router, logoutService: LogoutService) {
		this.router = router;
		this.logoutService = logoutService;
	}

	logout() {
		this.logoutService.logout().subscribe({
			next: (data) => {
				this.router.navigate(["/"], { skipLocationChange: true });
			},
			error: (err) => { }
		})
	}

	getLogoClass(){
		switch(this.currentRoute) {
			case "admin": {
				return "navbar-brand d-flex align-items-center px-4 px-lg-5k";
			}
			default : {
				return "navbar-brand d-flex align-items-center border-end px-4 px-lg-5";
			}
		}
	}

	getHomeClass(){
		switch(this.currentRoute) {
			case "admin": {
				return "nav-item nav-link disabled"
			}
			case "login": {
				return "nav-item nav-link"
			}
			default : {
				return "nav-item nav-link active"
			}
		}
	}

	getFragmentClass(){
		switch(this.currentRoute) {
			case "admin": {
				return "nav-item nav-link disabled"
			}
			default : {
				return "nav-item nav-link"
			}
		}
	}

	getLoginClass(){
		switch(this.currentRoute) {
			case "login": {
				return "nav-item nav-link active"
			}
			case "admin": {
				return "nav-item nav-link disabled"
			}
			default : {
				return "nav-item nav-link"
			}
		}
	}

	getLoginText() {
		switch(this.currentRoute) {
			case "admin": {
				return "Logged in"
			}
			default : {
				return "Login"
			}
		}
	}

	isLoggedOut(){
		switch(this.currentRoute) {
			case "admin": {
				return false;
			}
			default : {
				return true;
			}
		}
	}
}
