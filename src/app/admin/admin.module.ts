import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BodyParserService} from "../utility/body-parser.service";
import {AdminComponent} from "./admin.component";

@NgModule({
	declarations: [
		AdminComponent
	],
    imports: [
        CommonModule,
        FormsModule
    ],
	providers: [
		BodyParserService
	]
})
export class AdminModule {
}
