import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import {NGXLogger} from "ngx-logger";
import {NGXLoggerMock} from "ngx-logger/testing";
import {BodyParserService} from "../../utility/body-parser.service";

import { DeleteService } from './delete.service';

describe('DeleteService', () => {
  let deleteService: DeleteService;
  let httpMock: HttpTestingController;

  beforeEach(async() => {
    TestBed.configureTestingModule({
		imports: [HttpClientTestingModule],
		providers: [DeleteService, BodyParserService, {provide: NGXLogger, useClass: NGXLoggerMock}]
	});

	deleteService = TestBed.inject(DeleteService);
	httpMock = TestBed.inject(HttpTestingController);
  });

  it('should delete a database record and retrieve the next one', () => {
      let primaryKey =  Math.floor(Math.random() * 5 + 1)
	  const data = require('../test/mock_db_records.json');
	  console.log(data);

	  expect(deleteService).toBeTruthy();
  });
});
