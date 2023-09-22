import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {catchError, map, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {Contact} from "../httpRequest/contact";
import {Login} from "../login/login";


@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent {
	private apiViewNext = environment.apiViewNext;
	contact: Contact

	constructor(router: Router, private http: HttpClient) {
		this.contact = <Contact>router.getCurrentNavigation()?.extras.state;
		console.log("AdminComponent loaded: " + this.contact.id)
	}

	viewNext() {
		setTimeout(() => {
			document.getElementById("view-next-button")?.blur();
		}, 500);

		if (this.contact.id == undefined) return;

		this.http.post<Contact>(this.apiViewNext, this.contact.id, {
			observe: 'response',
			withCredentials: true
		}).pipe(map((res: HttpResponse<Contact>) => {
					let newContact = new Contact();
					newContact.id = res.body?.id;
					newContact.first_name = res.body?.first_name;
					newContact.last_name = res.body?.last_name;
					newContact.address_line1 = res.body?.address_line1;
					newContact.address_line2 = res.body?.address_line2;
					newContact.message = res.body?.message;
					this.contact = newContact;
					console.log('View-next successful ' + res.status);

				}
			), catchError((error: HttpErrorResponse) => {
				return throwError(() => new Error(error.status.toString()));
			})
		).subscribe({
			error: (error) => {
				console.log('View-next error: ' + error);
			}
		})
	}
}
