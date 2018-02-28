import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { StockValue } from '../../models/stock-value.model';
import { StockApiService } from '../../services/stock-api.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent implements OnInit {
  items$: Observable<StockValue[]>;

  constructor(private api: StockApiService) {}

  ngOnInit() {
    this.loadStocks();
  }

  public loadStocks() {
    // this.items$ = this.api.getDebug();
    this.items$ = this.api.getStocks(20);
  }
}
