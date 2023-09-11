import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()
export class ContactFormService {
	private url1 = 'https://97492c13-d3a4-470c-87e6-ff23d3b77c9d.mock.pstmn.io/form'
	private url = 'http://localhost:8080/form'
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
		this.http.post<any>(this.url, formValues, {
			headers:  new HttpHeaders({'content-type': 'application/json'}),
		}).pipe(catchError(this.handleError))
		.subscribe((res) => {
			console.log(res)
		})
	}

	private handleError(error: HttpErrorResponse) {
		// Return an observable with an error message.
		return throwError(() => new Error('An error occurred:', error.error));
	}
}
