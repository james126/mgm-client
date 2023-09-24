import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Contact} from "./dto/contact";
import {DeleteService} from "./service/delete.service";
import {ViewNextService} from "./service/view-next.service";

@Component({
	selector: 'mgm-admin',
	templateUrl: './admin.component.html',
	styles: [
		`.border-end {
			border-right: none !important;
		}`
	],
	providers: [ViewNextService, DeleteService]
})
export class AdminComponent {
	contact: Contact
	viewNextService: ViewNextService
	deleteService: DeleteService

	constructor(router: Router, viewNextService: ViewNextService, deleteService: DeleteService) {
		this.contact = <Contact>router.getCurrentNavigation()?.extras.state;
		this.viewNextService = viewNextService;
		this.deleteService = deleteService;
	}

	viewNext() {
		setTimeout(() => {
			document.getElementById("view-next-button")?.blur();
		}, 1000);

		if (this.contact.id == -1) return;

		this.viewNextService.viewNext(this.contact.id).subscribe({
			next: (data) => {
				this.contact = this.viewNextService.getContact();
			},
			error: (err) => {
			}
		});
	}

	delete() {
		setTimeout(() => {
			document.getElementById("delete-button")?.blur();
		}, 1000);

		if (this.contact.id == -1)
			return;

		this.deleteService.delete(this.contact.id).subscribe({
			next: (data) => {
				this.contact = this.deleteService.getContact();
			},
			error: (err) => {
			}
		});
	}
}
