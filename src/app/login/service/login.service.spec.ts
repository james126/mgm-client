import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from '@angular/core/testing';
import {NGXLogger} from "ngx-logger";
import {NGXLoggerMock} from "ngx-logger/testing";
import {environment} from "../../../environments/environment";
import {Contact} from "../dto/contact";
import {BodyParserService} from "../../utility/body-parser.service";
import {Login} from "../dto/login";
import {LoginService} from './login.service';

describe('LoginService', () => {
	let loginService: LoginService;
	let httpMock: HttpTestingController;
	let url = environment.apiLogin;

	beforeEach(async() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [LoginService, BodyParserService, {provide: NGXLogger, useClass: NGXLoggerMock}]
		});

		loginService = TestBed.inject(LoginService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	it('should login and retrieve a record', () => {
		let login: Login = new Login("user", "password");

		const data: Contact = new Contact();
		data.id = 2;
		data.first_name = "Anoushka";
		data.last_name = "Curtis";
		data.email = "zion_carroll0@hotmail.com";
		data.phone = "699536123";
		data.address_line1 = "206 Mahuhu Crescent";
		data.address_line2 = "Grafton";
		data.message = "Garden tidy up";

		loginService.submitLogin(login).subscribe(
			res => {
				const result = loginService.getContact();
				expect(result).toBe(result)
			}
		)

		let request = httpMock.expectOne(url);
		expect(request.request.method).toBe('POST');
		expect(request.request.body).toEqual(login);
		request.flush(data);
	});

	afterEach(() => httpMock.verify());
});
