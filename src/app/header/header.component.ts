import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {NGXLogger} from "ngx-logger";
import {catchError, map, throwError} from "rxjs";
import {environment} from "../../environments/environment";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	private apiLogout = environment.apiLogout;
	@Input() title: String = 'index';
	ids: Array<String> = ['about', 'services', 'contact']
	router: Router;

	constructor(router: Router, private http: HttpClient, private logger: NGXLogger) {
		this.router = router;
	}

	logout() {
		this.http.get(this.apiLogout, {
			observe: 'response',
			withCredentials: true
		}).pipe(map((res: HttpResponse<any>) => {
					this.logger.info('Logout successful ' + res.status);
					this.router.navigateByUrl('/');
				}
			), catchError((error: HttpErrorResponse) => {
				return throwError(() => new Error(error.status.toString()));
			})
		).subscribe({
			error: (error) => {
				this.logger.error('Logout error: ' + error);
			}
		})
	}
}
