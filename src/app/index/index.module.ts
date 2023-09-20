import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ContactFormService} from "../httpRequest/contact-form.service";
import {IndexComponent} from "./index.component";
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    IndexComponent
  ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterLink,
		CarouselModule
	],
  exports: [
    IndexComponent
  ],
	providers:[ContactFormService]
})
export class IndexModule { }
