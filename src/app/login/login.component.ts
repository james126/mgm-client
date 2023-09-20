
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginFormService} from "../httpRequest/login-form.service";
import {Login} from "./login";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
	service: LoginFormService;
	loginForm!: FormGroup;
	formValues = {username: '', password: ''};
	submitted: boolean = false;
	invalidCredentials: boolean = false;

	constructor(service: LoginFormService) {
		this.service = service;
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

	onSubmit(){
		this.submitted = true;

		setTimeout(() => {
			document.getElementById("submit-button")?.blur();
		}, 500);

		if (this.loginForm.valid) {
			const username: string = this.loginForm.get('username')!.value;
			const password: string = this.loginForm.get('password')!.value;
			const login = new Login(username, password);

			const myObserver = {
				next: (x: number) => console.log('Observer got a next value: ' + x),
				error: (err: Error) => console.error('Observer got an error: ' + err),
				complete: () => console.log('Observer got a complete notification'),
			};

			this.service.submitLoginForm(login)
				.subscribe({
				next: result => {
					console.log("successful " + result);
				},
				error: error => {
					console.log(error.status)
					this.submitted = true;
					this.invalidCredentials = true;
				}
			})
		}
	}


	get username() {
		return this.loginForm.get('username');
	}

	get password() {
		return this.loginForm.get('password');
	}
}
