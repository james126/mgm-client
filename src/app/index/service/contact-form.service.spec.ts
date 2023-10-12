import {HttpHeaders, HttpResponse} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import {NGXLogger} from "ngx-logger";
import {NGXLoggerMock} from "ngx-logger/testing";
import {environment} from "../../../environments/environment";
import {Contact} from "../dto/contact";

import { ContactFormService } from './contact-form.service';

describe('ContactFormService', () => {
	let submitService: ContactFormService;
	let httpMock: HttpTestingController;
	let url = environment.apiForm;
	let contact: Contact

  beforeEach(() => {
    TestBed.configureTestingModule({
		imports: [HttpClientTestingModule],
		providers: [ContactFormService, {provide: NGXLogger, useClass: NGXLoggerMock}]
	});

	submitService = TestBed.inject(ContactFormService);
	httpMock = TestBed.inject(HttpTestingController);

	  contact = new Contact();
	  contact.first_name = 'Joe';
	  contact.last_name = 'Bloggs';
	  contact.email = 'joe.bloggs@google.com';
	  contact.phone = '123456';
	  contact.address_line1 = '16 Pinero Place';
	  contact.address_line2 = 'Bucklands Beach'
	  contact.message = 'Lawnmowing quote'
  });

  it('should submit a record', () => {

	  submitService.submitContactForm(contact).subscribe(
		  res => {
			  expect(res).toBeUndefined();
		  }
	  )
	  const request = httpMock.expectOne(url);
	  expect(request.request.method).toBe('POST');
	  expect(request.request.body).toEqual(contact);
	  request.flush(contact);
  });

	it('should return an error if request fails', () => {
		const errorType = 'CANNOT_SUBMIT_CONTACT_FORM' ;

		submitService.submitContactForm(contact).subscribe(
			res => {},
			errorResponse => expect(errorResponse.error.type).toEqual(errorType)
		)

		let request = httpMock.expectOne(url);
		expect(request.request.method).toBe('POST');
		request.error(new ProgressEvent("errorType"));
	});

	afterEach(() => {
		httpMock.verify();
	});
});
