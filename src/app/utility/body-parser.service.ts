import {HttpResponse} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Contact} from "../admin/dto/contact";

@Injectable()
export class BodyParserService {

	processResponseBody(res: HttpResponse<Contact>) : Contact{
		let newContact = new Contact();
		if (res.body == null) {
			newContact.id = -1;
			newContact.first_name = '';
			newContact.last_name = '';
			newContact.email = '';
			newContact.phone = '';
			newContact.address_line1 = '';
			newContact.address_line2 = '';
			newContact.message = '';
			return newContact
		} else {
			newContact.id = res.body?.id;
			newContact.first_name = res.body?.first_name;
			newContact.last_name = res.body?.last_name;
			newContact.email = res.body?.email;
			newContact.phone = res.body?.phone;
			newContact.address_line1 = res.body?.address_line1;
			newContact.address_line2 = res.body?.address_line2;
			newContact.message = res.body?.message;
			return newContact
		}
	}
}
