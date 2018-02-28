import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StocksComponent } from './components/stocks/stocks.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { StockTableComponent } from './components/stock-table/stock-table.component';

import { StockApiService } from './services/stock-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [StocksComponent, StockChartComponent, StockTableComponent],
  providers: [StockApiService],
  exports: [StocksComponent],
})
export class StocksModule {}
