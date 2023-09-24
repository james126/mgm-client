import {HttpResponse} from "@angular/common/http";
import { TestBed } from '@angular/core/testing';
import {Contact} from "../admin/dto/contact";

import { BodyParserService } from './body-parser.service';

describe('BodyParserService', () => {
  let service: BodyParserService;
  let body: Contact;
  let response: HttpResponse<Contact>

  beforeEach(() => {
	  const id: number = 1;
	  const first_name: string = 'Joe';
	  const last_name: string = 'Bloggs';
	  const email: string = 'joe.bloggs@google.com';
	  const phone: string = '123456';
	  const address_line1: string = '16 Pinero Place';
	  const address_line2: string = 'Bucklands Beach'
	  const message: string = 'Lawnmowing quote'
	  body = new Contact();
	  body.id = id;
	  body.first_name = first_name;
	  body.last_name = last_name;
	  body.email = email;
	  body.phone = phone;
	  body.address_line1 = address_line1;
	  body.address_line2 = address_line2;
	  body.message = message;

    TestBed.configureTestingModule({
		declarations: [HttpResponse],
		providers: [BodyParserService]
	});
    service = TestBed.inject(BodyParserService);
	response = new HttpResponse<Contact>({body});
  });

  it('should be created', () => {
	  expect(service.processResponseBody(response)).toEqual(body);
  });
});
