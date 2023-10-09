import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CopyrightDirective} from "./copyright.directive";

import { FooterComponent } from './footer.component';

xdescribe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, CopyrightDirective]
    });
  });

  it('create an instance of FooterComponent', () => {
	  fixture = TestBed.createComponent(FooterComponent);
	  component = fixture.componentInstance;
	  expect(component).toBeTruthy();
  });

	it('displays the current year', () => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		const compiled = fixture.nativeElement as HTMLElement;
		const paragraph = compiled.getElementsByTagName("p").item(0);
		const text = `Copyright ©` + new Date().getFullYear() + ` All Rights Reserved.`
		expect(paragraph).toBeTruthy();
		expect(paragraph?.textContent).toEqual(text);
	});
});
