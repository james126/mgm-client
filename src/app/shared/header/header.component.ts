import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Input() title: String = 'index';
	//headerConfig: HeaderConfig;

	ids: Array<String> = ['about', 'services', 'contact']

	constructor() {

	}
}
