
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminModule} from "../admin/admin.module";
import {AppRoutingModule} from "../app-routing.module";
import {CustomerModule} from "../customer/customer.module";
import {LoginRoutingModule} from "../login/login.routing.module";
import {HeaderComponent} from "./header.component";
import {LoginModule} from "../login/login.module";
import {IndexModule} from "../index/index.module";
import {LogoutService} from "./service/logout.service";

@NgModule({
	declarations: [HeaderComponent],
	exports: [HeaderComponent],
	imports: [
		CommonModule,
		IndexModule,
		AppRoutingModule
	],
	providers: [LogoutService]
})
export class HeaderModule {
}
