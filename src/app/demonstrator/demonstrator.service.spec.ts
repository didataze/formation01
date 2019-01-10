import { TestBed, inject } from '@angular/core/testing';

import { DemonstratorService } from './demonstrator.service';

describe('DemonstratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemonstratorService]
    });
  });

  it('should be created', inject([DemonstratorService], (service: DemonstratorService) => {
    expect(service).toBeTruthy();
  }));
});
