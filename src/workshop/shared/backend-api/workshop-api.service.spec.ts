import { TestBed } from '@angular/core/testing';

import { WorkshopApi } from './workshop-api.service';

describe('WorkshopApi', () => {
  let service: WorkshopApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkshopApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
