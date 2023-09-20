import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterModule} from "./footer/footer.module";
import {HeaderModule} from "./header/header.module";
import {HeaderRoutingModule} from "./header/header.routing.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HeaderRoutingModule,
		AppRoutingModule,
		HeaderModule,
		FooterModule,
		HttpClientModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
