import { TestBed } from '@angular/core/testing';

import { LoggingserviceService } from './loggingservice.service';

describe('LoggingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggingserviceService = TestBed.get(LoggingserviceService);
    expect(service).toBeTruthy();
  });
});
