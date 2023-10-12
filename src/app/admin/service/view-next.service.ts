import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {NGXLogger} from "ngx-logger";
import {catchError, EMPTY, map} from "rxjs";
import {environment} from '../../../environments/environment';
import {BodyParserService} from "../../utility/body-parser.service";
import {Contact} from "../dto/contact";

@Injectable()
export class ViewNextService {
	private url = environment.apiViewNext;
	contact!: Contact;
	bodyParserService: BodyParserService;

	constructor(private http: HttpClient, bodyParserService: BodyParserService, private logger: NGXLogger) {
		this.bodyParserService = bodyParserService;
	}

	getContact() {
		return this.contact;
	}

	viewNext(id?: Number) {
		return this.http.post<Contact>(this.url, id, {
			observe: 'response',
			withCredentials: true
		}).pipe(map((res) => {
			this.contact = this.bodyParserService.processResponseBody(res);
			this.logger.log('View-next ' + res.status);
		}), catchError((error: HttpErrorResponse) => {
			this.logger.error(error);
			return EMPTY;
		}))
	}
}
