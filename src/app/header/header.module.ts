
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {HeaderRoutingModule} from "./header.routing.module";
import {LoginModule} from "../login/login.module";
import {IndexModule} from "../index/index.module";
import {RouterOutlet} from "@angular/router";
import {LogoutService} from "./service/logout.service";

@NgModule({
	declarations: [HeaderComponent],
	exports: [HeaderComponent],
	imports: [
		CommonModule,
		HeaderRoutingModule,
		IndexModule,
		LoginModule,
		RouterOutlet
	],
	providers: [LogoutService]
})
export class HeaderModule {
}
