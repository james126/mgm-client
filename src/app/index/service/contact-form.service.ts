import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {NGXLogger} from "ngx-logger";
import {catchError, map, throwError} from "rxjs";
import {environment} from '../../../environments/environment';
import {Contact} from "../dto/contact";

@Injectable()
export class ContactFormService {
	private url = environment.apiForm;

	constructor(private http: HttpClient, private logger: NGXLogger) {
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

	submitContactForm(formValues: Contact) {
		return this.http.post(this.url, formValues, {
			headers: new HttpHeaders({'Content-Type': 'application/json'}),
			observe: 'response',
		}).pipe(map((res) => {
				console.log('Submitted contact form ' + res.status);
			})
			, catchError((error: HttpErrorResponse) => {
				this.logger.error(error);
				return throwError(() => new Error(error.message.toString()));
			}))

	}
}
