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
  items$: Observable<StockValue[]>;

  constructor(private api: StockApiService) {}

  ngOnInit() {
    // call loadStock every 1000ms
    Observable.interval(1000).subscribe(_ => this.loadStocks());
  }

  public loadStocks() {
    this.items$ = this.api.getStocks(20);
  }
}
