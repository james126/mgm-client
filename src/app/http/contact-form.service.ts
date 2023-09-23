import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, filter, map, throwError} from "rxjs";
import { environment } from '../../environments/environment';

@Injectable()
export class ContactFormService {
	private url = environment.apiForm;
	constructor(private http: HttpClient) { }

	// options: {
	// 	headers?: HttpHeaders | {[header: string]: string | string[]},
	// 	observe?: 'body' | 'events' | 'response',
	// 	params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
	// 	reportProgress?: boolean,
	// 	responseType?: 'arraybuffer'|'blob'|'json'|'text',
	// 	withCredentials?: boolean,
	// }
	//get an observable of <any>

	submitContactForm(formValues: object) {
		return this.http.post<any>(this.url, formValues, {
			headers:  new HttpHeaders({'Content-Type': 'application/json'}),
			observe: 'response',
		}).pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		// Return an observable with an error message.
		return throwError(() => new Error('An error occurred:', error.error));
	}
}
