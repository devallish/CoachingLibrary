import { TestBed, inject } from '@angular/core/testing';

import { DevallishComponentsService } from './devallish-components.service';

describe('DevallishComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevallishComponentsService]
    });
  });

  it('should be created', inject([DevallishComponentsService], (service: DevallishComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
