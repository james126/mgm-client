import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from '@angular/core/testing';
import {NGXLogger} from "ngx-logger";
import {NGXLoggerMock} from "ngx-logger/testing";
import {environment} from "../../../environments/environment";
import {BodyParserService} from "../../utility/body-parser.service";
import {Contact} from "../dto/contact";

import {DeleteService} from './delete.service';

describe('DeleteService', () => {
	let deleteService: DeleteService;
	let httpMock: HttpTestingController;
	let url = environment.apiDelete;

	beforeEach(async() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [DeleteService, BodyParserService, {provide: NGXLogger, useClass: NGXLoggerMock}]
		});

		deleteService = TestBed.inject(DeleteService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	it('should delete a record and retrieve the next one', () => {
		const data: Contact = new Contact();
		data.id = 2;
		data.first_name = "Anoushka";
		data.last_name = "Curtis";
		data.email = "zion_carroll0@hotmail.com";
		data.phone = "699536123";
		data.address_line1 = "206 Mahuhu Crescent";
		data.address_line2 = "Grafton";
		data.message = "Garden tidy up";

		const id = 1;

		deleteService.delete(id).subscribe(
			res => {
				const result = deleteService.getContact();
				expect(result).toEqual(data);
			}
		)

		let request = httpMock.expectOne(url);
		expect(request.request.method).toBe('POST');
		expect(request.request.body).toEqual(id);
		request.flush(data);
	});

	it('should return an error if request fails', () => {
		const errorType = 'CANNOT_DELETE_CONTACT' ;

		deleteService.delete(1).subscribe(
			res => {},
			errorResponse => expect(errorResponse.error.type).toEqual(errorType)
		)

		let request = httpMock.expectOne(url);
		expect(request.request.method).toBe('POST');
		request.error(new ProgressEvent("errorType"));
	});

	afterEach(() => httpMock.verify());
});
