import {Component, Inject, Input} from '@angular/core';
import {ViewNextService} from "./view-next.service";
import {CONTACT_CONFIG} from "./contact.config";
import {ContactConfig} from "./contact.config";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
	providers: [ViewNextService]
})
export class AdminComponent {
	contactConfig: ContactConfig;

	constructor(viewNextService: ViewNextService, @Inject(CONTACT_CONFIG) config: ContactConfig) {
		this.contactConfig = config;
	}


}
