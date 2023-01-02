import { TestBed } from '@angular/core/testing';

import { HttpCheckService } from './http-check.service';

describe('HttpCheckService', () => {
  let service: HttpCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
