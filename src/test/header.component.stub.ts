import { Component, Input } from "@angular/core";

@Component({
	selector: 'app-header',
    template: ''
})
export class HeaderComponentStub {
	@Input() title: String = 'index';
}