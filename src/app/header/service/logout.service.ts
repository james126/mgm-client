import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {NGXLogger} from "ngx-logger";
import {catchError, map, throwError} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class LogoutService {
	private apiLogout = environment.apiLogout;

  constructor(private http: HttpClient, private logger: NGXLogger) { }

	logout() {
		return this.http.get(this.apiLogout, {
			observe: 'response',
			withCredentials: true
		}).pipe(map((res: HttpResponse<any>) => {
					console.log('Logout successful ' + res.status);
				}
			), catchError((error: HttpErrorResponse) => {
				this.logger.error('Logout error: ' + error);
				return throwError(() => new Error(error.status.toString()));
			})
		)
	}
}
