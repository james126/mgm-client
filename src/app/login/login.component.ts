
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginFormService} from "../httpRequest/login-form.service";
import {Login} from "./login";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
	router!: Router;
	service!: LoginFormService;
	loginForm!: FormGroup;
	formValues = {username: '', password: ''};
	submitted: boolean = false;
	invalidCredentials: boolean = false;

	constructor(service: LoginFormService,  router: Router) {
		this.service = service;
		this.router = router;
	}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			username: new FormControl(this.formValues.username, [
				Validators.required,
				Validators.minLength(1),
			]),
			password: new FormControl(this.formValues.password, [
				Validators.required,
				Validators.minLength(1),
			])
		});
	}

	get username() {
		return this.loginForm.get('username');
	}

	get password() {
		return this.loginForm.get('password');
	}

	onSubmit(){
		this.submitted = true;

		setTimeout(() => {
			document.getElementById("submit-button")?.blur();
		}, 500);

		if (this.loginForm.valid) {
			const username: string = this.loginForm.get('username')!.value;
			const password: string = this.loginForm.get('password')!.value;
			const login = new Login(username, password);

			const res = this.service.submitLoginForm(login)
			if (!res){
				this.submitted = true;
				this.invalidCredentials = true;
			} else {
				this.router.navigateByUrl('/admin');
			}
		}
	}
}
