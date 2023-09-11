import {Component, Inject} from '@angular/core';
import {LoginService} from "./login.service";
import {DEFAULT_LOGIN, defaultLogin, Login} from "./login";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [LoginService,
		{provide: DEFAULT_LOGIN, useValue:defaultLogin }]
})
export class LoginComponent {
	login: Login;

	constructor(private loginService: LoginService, @Inject(DEFAULT_LOGIN) login: Login) {
		this.login = login;
	}

	submitLogin(username: string, password: string){
		console.log("username: " + username);
		console.log("password: " + password);
	}
}
