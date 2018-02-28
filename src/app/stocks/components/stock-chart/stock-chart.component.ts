import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';

import { StockValue } from '../../models/stock-value.model';
import * as c3 from 'c3';

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockChartComponent implements OnInit {
  @Input()
  set data(data: StockValue[]) {
    if (data != null) {
      this.cac40 = ['CAC40', ...data.map(sv => sv.stocks.CAC40)];
      this.nasdaq = ['NASDAQ', ...data.map(sv => sv.stocks.NASDAQ)];
      this.generateChart();
    }
  }

  private cac40;
  private nasdaq;

  constructor() {}

  ngOnInit() {}

  generateChart() {
    const chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [this.cac40, this.nasdaq],
      },
    });
  }
}
