import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Contact} from "./contact";

@Injectable()
export class LoginFormService {
	private url = environment.apiLogin;
	private _contact!: Contact | undefined;

	get contact(): Contact | undefined {
		return this._contact;
	}

	set contact(value: Contact | undefined) {
		this._contact = value;
	}

	constructor(private http: HttpClient) {
	}

	// options: {
	// 	headers?: HttpHeaders | {[header: string]: string | string[]},
	// 	observe?: 'body' | 'events' | 'response',
	// 	params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
	// 	reportProgress?: boolean,
	// 	responseType?: 'arraybuffer'|'blob'|'json'|'text',
	// 	withCredentials?: boolean,
	// }
	//get an observable of <any>

	submitLoginForm(formValues: object)  {
		let res = true;

		this.http.post<Contact>(this.url, formValues, {
			headers: new HttpHeaders({'Content-Type': 'application/json'})
		}).subscribe({
			next: (result) => {
				this.contact = new Contact();
				this.contact.id = result.id;
				this.contact.first_name = result.first_name;
				this.contact.last_name = result.last_name;
				this.contact.address_line1 = result.address_line1;
				this.contact.address_line2 = result.address_line2;
				this.contact.message = result.message;
				console.log('Login successful');
			},
			error: (error) => {
				res = false;
				console.log('Login unsuccessful: ' + error.status);
			}
		})

		return res;
	}
}

