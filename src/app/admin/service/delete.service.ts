import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {NGXLogger} from "ngx-logger";
import {catchError, EMPTY, map, throwError} from "rxjs";
import {environment} from '../../../environments/environment';
import {BodyParserService} from "../../utility/body-parser.service";
import {Contact} from "../dto/contact";

@Injectable()
export class DeleteService {
  private url = environment.apiDelete;
  contact!: Contact;
  bodyParserService: BodyParserService;

  constructor(private http: HttpClient, bodyParserService: BodyParserService, private logger: NGXLogger) {
    this.bodyParserService = bodyParserService;
  }

  getContact(){
    return this.contact;
  }

  delete(id?: Number) {
    return this.http.post<Contact>(this.url, id, {
      observe: 'response',
      withCredentials: true
    }).pipe(map((res: HttpResponse<Contact>) => {
              this.contact = this.bodyParserService.processResponseBody(res);
              this.logger.log('Delete successful ' + res.status);
            }
        ), catchError((error: HttpErrorResponse) => {
          this.logger.error(error);
          return EMPTY;
        })
    )
  }
}
