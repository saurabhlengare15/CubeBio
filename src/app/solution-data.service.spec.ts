import { TestBed } from '@angular/core/testing';

import { SolutionDataService } from './solution-data.service';

describe('SolutionDataService', () => {
  let service: SolutionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
