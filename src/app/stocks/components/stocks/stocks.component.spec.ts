import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StocksComponent } from './stocks.component';
import { StockApiService } from '../../services/stock-api.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StockComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  class MockStockApiService {}

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: StockApiService, useClass: MockStockApiService },
        ],
        schemas: [NO_ERRORS_SCHEMA],
        declarations: [StocksComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
