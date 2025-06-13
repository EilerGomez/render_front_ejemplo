import { TestBed } from '@angular/core/testing';

import { ServiciotableService } from './serviciotable.service';

describe('ServiciotableService', () => {
  let service: ServiciotableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciotableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
