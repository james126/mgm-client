import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from '@angular/core/testing';
import {NGXLogger} from "ngx-logger";
import {NGXLoggerMock} from "ngx-logger/testing";
import {environment} from "../../../environments/environment";
import {Contact} from "../../login/dto/contact";
import {Login} from "../../login/dto/login";
import {LoginService} from "../../login/service/login.service";
import {LogoutService} from './logout.service';

describe('LogoutService', () => {
	let logoutService: LogoutService;
	let httpMock: HttpTestingController;
	let url = environment.apiLogout;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [LogoutService, {provide: NGXLogger, useClass: NGXLoggerMock}]
		});

		logoutService = TestBed.inject(LogoutService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	it('should successfully logout', () => {
		logoutService.logout().subscribe(
			res => {
				expect(res).toBeUndefined();
			}
		)

		let request = httpMock.expectOne(url);
		expect(request.request.method).toBe('GET');
		request.flush(null);
	});

	afterEach(() => httpMock.verify());
});
