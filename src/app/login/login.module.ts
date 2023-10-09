import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {BodyParserService} from "../utility/body-parser.service";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginRoutingModule} from "./login.routing.module";

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterLink,
		ReactiveFormsModule,
		LoginRoutingModule
	],
	exports: [
		LoginComponent
	],
	providers: [
		BodyParserService
	]
})
export class LoginModule {
}
