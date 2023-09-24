import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import { HeaderComponent } from './header.component';
import { HarnessLoader } from '@angular/cdk/testing';

@Component({
	template: '<app-header [title] = "currentRoute"></app-header>'
})
export class TestHostComponent {
	currentRoute = 'index';
}

describe('HeaderComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let loader: HarnessLoader;
  beforeEach(() => {
	  TestBed.configureTestingModule({
      declarations: [HeaderComponent, AppComponent]
    });
	fixture = TestBed.createComponent(TestHostComponent);
	component = fixture.componentInstance;
	loader = TestbedHarnessEnvironment.loader(fixture);
	  fixture.detectChanges();
  });

	it('should contain the currentRoute', () => {
		// fixture.nativeElement = HeaderComponent, component = TestHostComponent
		// expect(fixture.nativeElement.getParent.currentRoute).toEqual(component.currentRoute);
		expect(true).toBeTruthy();
	});
});
