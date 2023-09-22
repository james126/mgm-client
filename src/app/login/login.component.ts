import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {catchError, map, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {Contact} from "../httpRequest/contact";
import {Login} from "./login";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	private apiLogin = environment.apiLogin;
	router!: Router;
	loginForm!: FormGroup;
	formValues = {username: '', password: ''};
	submitted: boolean = false;
	invalidCredentials: boolean = false;
	contact!: Contact

	constructor(router: Router, private http: HttpClient) {
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

	onSubmit() {
		setTimeout(() => {
			document.getElementById("submit-button")?.blur();
		}, 500);

		if (this.loginForm.valid) {
			const username: string = this.loginForm.get('username')!.value;
			const password: string = this.loginForm.get('password')!.value;
			const login = new Login(username, password);

			this.http.post<Contact>(this.apiLogin, login, {
				observe: 'response',
				withCredentials: true
			}).pipe(map((res: HttpResponse<Contact>) => {
						this.contact = new Contact();
						this.contact.id = res.body?.id;
						this.contact.first_name = res.body?.first_name;
						this.contact.last_name = res.body?.last_name;
						this.contact.address_line1 = res.body?.address_line1;
						this.contact.address_line2 = res.body?.address_line2;
						this.contact.message = res.body?.message;
					console.log('Login successful ' + res.status);
					this.router.navigateByUrl('/admin', { state : this.contact});
					}
				), catchError((error: HttpErrorResponse) => {
					return throwError(() => new Error(error.status.toString()));
				})
			).subscribe({
					error: (error) => {
					console.log('Login unsuccessful: ' + error);
					this.submitted = true;
					this.invalidCredentials = true;
				}
			})
		}
	}
}
