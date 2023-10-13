import { TestBed } from '@angular/core/testing';

import { MfeManagementService } from './mfe-management.service';

describe('MfeManagementService', () => {
  let service: MfeManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
