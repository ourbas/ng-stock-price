import { TestBed, inject } from '@angular/core/testing';

import { StockApiService } from './stock-api.service';
import { HttpClient } from '@angular/common/http';

describe('StockApiService', () => {
  class MockHttpClient {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StockApiService,
        {
          provide: HttpClient,
          useClass: MockHttpClient,
        },
      ],
    });
  });

  it(
    'should be created',
    inject([StockApiService], (service: StockApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
