import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NGXLogger} from "ngx-logger";
import {catchError, map, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {BodyParserService} from "../http/body-parser.service";
import {Contact} from "../http/contact";

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent {
	private apiViewNext = environment.apiViewNext;
	private apiDelete = environment.apiDelete;
	contact: Contact
	bodyParserService: BodyParserService

	constructor(router: Router, private http: HttpClient, bodyParserService: BodyParserService, private logger: NGXLogger) {
		this.contact = <Contact>router.getCurrentNavigation()?.extras.state;
		this.bodyParserService = bodyParserService;
	}

	viewNext() {
		setTimeout(() => {
			document.getElementById("view-next-button")?.blur();
		}, 1000);

		if (this.contact.id == -1) return;

		this.http.post<Contact>(this.apiViewNext, this.contact.id, {
			observe: 'response',
			withCredentials: true
		}).pipe(map((res: HttpResponse<Contact>) => {
					this.contact = this.bodyParserService.processResponseBody(res);
					this.logger.info('View-next successful ' + res.status);
				}
			), catchError((error: HttpErrorResponse) => {
				return throwError(() => new Error(error.status.toString()));
			})
		).subscribe({
			error: (error) => {
				this.logger.error('View-next error: ' + error);
			}
		})
	}

	delete() {
		setTimeout(() => {
			document.getElementById("delete-button")?.blur();
		}, 1000);

		if (this.contact.id == -1)
			return;

		this.http.post<Contact>(this.apiDelete, this.contact.id, {
			observe: 'response',
			withCredentials: true
		}).pipe(map((res: HttpResponse<Contact>) => {
					this.contact = this.bodyParserService.processResponseBody(res);
					this.logger.info('Delete successful ' + res.status);
				}
			), catchError((error: HttpErrorResponse) => {
				return throwError(() => new Error(error.status.toString()));
			})
		).subscribe({
			error: (error) => {
				this.logger.error('Delete error: ' + error);
			}
		})
	}
}
