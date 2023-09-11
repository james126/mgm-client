import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CopyrightDirective} from "./copyright.directive";
import {FooterComponent} from "./footer.component";

@NgModule({
	declarations: [
		FooterComponent,
		CopyrightDirective
	],
	exports: [
		CopyrightDirective,
		FooterComponent
	],
	imports: [
		CommonModule
	]
})
export class FooterModule { }
