import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterModule} from "./footer/footer.module";
import {HeaderModule} from "./header/header.module";
import {HeaderRoutingModule} from "./header/header.routing.module";
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

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
		HttpClientModule,
		LoggerModule.forRoot({
			serverLoggingUrl: `${environment.serverLoggingUrl}`,
			level: NgxLoggerLevel.INFO,
			serverLogLevel: NgxLoggerLevel.ERROR,
			disableConsoleLogging: false
		})
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
