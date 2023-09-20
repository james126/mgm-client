import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Contact} from "./contact";

@Injectable()
export class LoginFormService {
	private url = environment.apiLogin;

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

	submitLoginForm(formValues: object): Observable<HttpResponse<object>> {
		// return this.http.post<Contact>(this.url, formValues, {
		// 	headers: new HttpHeaders({'Content-Type': 'application/json'}),
		// 	observe: 'response',
		// 	responseType: 'json'
		// })

		return this.http.post<any>(this.url, formValues, {
			headers: new HttpHeaders({'Content-Type': 'application/json'}),
			observe: 'response',
			responseType: 'json'
		})
	}
}
