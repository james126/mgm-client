import {HttpHeaders} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import {environment} from "../../../environments/environment";
import {Contact} from "../dto/contact";

import { ContactFormService } from './contact-form.service';

xdescribe('ContactFormService', () => {
	let httpTestingController: HttpTestingController;
	let service: ContactFormService;
	let contact: Contact
    let url = environment.apiForm;

  beforeEach(() => {
    TestBed.configureTestingModule({
		imports: [HttpClientTestingModule],
		providers: [ContactFormService]
	});
    service = TestBed.inject(ContactFormService);

	httpTestingController = TestBed.inject(HttpTestingController);
	const contact = new Contact();
	  contact.first_name = 'Joe';
	  contact.last_name = 'Bloggs';
	  contact.email = 'joe.bloggs@google.com';
	  contact.phone = '123456';
	  contact.address_line1 = '16 Pinero Place';
	  contact.address_line2 = 'Bucklands Beach'
	  contact.message = 'Lawnmowing quote'
  });

  it('should submit contact form', () => {
    service.submitContactForm(contact).subscribe();
	  const req = httpTestingController.expectOne(url);
	  expect(req.request.method).toBe('POST');
		  expect(req.request.body).toEqual(contact);
  });

	afterEach(() => {
		httpTestingController.verify();
	});
});
