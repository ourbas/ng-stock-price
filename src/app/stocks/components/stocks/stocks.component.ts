import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import { StockValue } from '../../models/stock-value.model';
import { StockApiService } from '../../services/stock-api.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent implements OnInit {
  items: StockValue[];
  isRunning = false;

  constructor(private api: StockApiService) {}

  ngOnInit() {
    this.isRunning = true;
    // call refresh every 1000ms
    Observable.interval(1000).subscribe(_ => this.refreshStocks());
  }

  refreshStocks() {
    if (this.isRunning) {
      this.api.getStocks(20).subscribe(stocks => (this.items = stocks));
    }
  }

  updateStockValue(value: StockValue) {
    this.items = this.items.map(
      item => (item.index === value.index ? value : item)
    );
  }

  toggleRefresh() {
    this.isRunning = !this.isRunning;
  }
}
