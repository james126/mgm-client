import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ContactFormService} from "./http/contact-form.service";


@Component({
	selector: 'app-index',
	templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
	service: ContactFormService;
	router: Router;
	formValues = {first_name: '', last_name: '', email: '', phone: '', address_line1: '', address_line2: '', message: ''};
	submitted: boolean = false;
	contactForm!: FormGroup;
	customOptions: OwlOptions = {
		loop: true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplaySpeed:1000,
		autoplayHoverPause:true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			740: {
				items: 1
			},
			940: {
				items: 1
			}
		}
	}

	constructor(service: ContactFormService, router: Router) {
		this.service = service;
		this.router = router;
	}

	ngOnInit(): void {
		this.contactForm = new FormGroup({
			first_name: new FormControl(this.formValues.first_name, [
				Validators.required,
				Validators.minLength(1),
			]),
			last_name: new FormControl(this.formValues.last_name, [
				Validators.required,
				Validators.minLength(1),
			]),
			email: new FormControl(this.formValues.email, [
				Validators.required,
				Validators.minLength(1),
				Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
			]),
			phone: new FormControl(this.formValues.phone, [
				Validators.required,
				Validators.minLength(3),
			]),
			address_line1: new FormControl(this.formValues.address_line1, [
				Validators.required,
				Validators.minLength(1),
			]),
			address_line2: new FormControl(this.formValues.address_line2, [
				Validators.required,
				Validators.minLength(1),
			]),
			message: new FormControl(this.formValues.message, [
				Validators.required,
				Validators.minLength(1),
			])
		});
	}

	onSubmit() {
		this.submitted = true;

		setTimeout(() => {
			document.getElementById("submit-button")?.blur();
		}, 500);

		if (this.contactForm.valid){
			this.service.submitContactForm(this.formValues);
			this.contactForm.reset();
			this.submitted = false;
			this.router.navigate(['/index']).catch(err => {console.log(err)});
		}
	}

	get first_name() {
		return this.contactForm.get('first_name');
	}

	get last_name() {
		return this.contactForm.get('last_name');
	}

	get email() {
		return this.contactForm.get('email');
	}

	get phone() {
		return this.contactForm.get('phone');
	}

	get address_line1() {
		return this.contactForm.get('address_line1');
	}

	get address_line2() {
		return this.contactForm.get('address_line2');
	}

	get message() {
		return this.contactForm.get('message');
	}
}
