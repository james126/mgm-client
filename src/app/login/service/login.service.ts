import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {NGXLogger} from "ngx-logger";
import {catchError, filter, map, throwError} from "rxjs";
import { environment } from '../../../environments/environment';
import {BodyParserService} from "../../utility/body-parser.service";
import {Login} from "../dto/login";
import {Contact} from "../dto/contact";

@Injectable()
export class LoginService {
	url = environment.apiLogin;
    contact!: Contact
    bodyParserService: BodyParserService

    constructor(private http: HttpClient, private logger: NGXLogger, bodyParserService: BodyParserService) {
        this.bodyParserService = bodyParserService;
    }

    getContact() {
        return this.contact;
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

	submitLogin(loginValues: Login) {
        return this.http.post<Contact>(this.url, loginValues, {
            observe: 'response',
            withCredentials: true
        }).pipe(map((res: HttpResponse<Contact>) => {
                this.contact = this.bodyParserService.processResponseBody(res);
                console.log('Login successful ' + res.status);
            }
        ), catchError((error: HttpErrorResponse) => {
            this.logger.error(error);
            return throwError(() => new Error(error.status.toString()));
        }));
	}
}
