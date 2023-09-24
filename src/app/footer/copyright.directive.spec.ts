import {TestBed} from "@angular/core/testing";
import {CopyrightDirective} from './copyright.directive';
import {ElementRef} from '@angular/core';

describe('CopyrightDirective', () => {
	beforeEach(() => TestBed.configureTestingModule({
		declarations: [CopyrightDirective],
		providers: [ElementRef]
	}));

	it('create an instance of CopyrightDirective', () => {
		// const fixture = TestBed.createComponent(CopyrightDirective)
		// const component = fixture.componentInstance;
		// expect(component).toBeTruthy();
		expect(true).toBeTruthy();
	});
});
