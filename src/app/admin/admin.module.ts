import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from "./admin.component";
import {ViewNextService} from "./view-next.service";

@NgModule({
	declarations: [
		AdminComponent
	],
	imports: [
		CommonModule
	],
	exports: [
	]
})
export class AdminModule {
}
