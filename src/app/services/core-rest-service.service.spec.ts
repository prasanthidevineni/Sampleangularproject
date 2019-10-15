import { TestBed, inject } from '@angular/core/testing';

import { CoreRestServiceService } from './core-rest-service.service';

describe('CoreRestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreRestServiceService]
    });
  });

  it('should be created', inject([CoreRestServiceService], (service: CoreRestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
