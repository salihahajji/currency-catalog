import { TestBed } from '@angular/core/testing';

import { CurrenciesService } from '../services/currencies.service';

describe('CurrenciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrenciesService = TestBed.get(CurrenciesService);
    expect(service).toBeTruthy();
  });
});
