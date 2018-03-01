import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { StockValue } from '../../models/stock-value.model';
import { element } from 'protractor';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockTableComponent implements OnInit {
  @Input() data: StockValue[];
  @Input() editMode = true;

  @Output() valueChanged = new EventEmitter<StockValue>();

  constructor() {}

  ngOnInit() {}

  onCac40Changed(item: StockValue, value: number) {
    item.stocks.CAC40 = value;
    this.valueChanged.emit(item);
  }

  onNasdaqChanged(item: StockValue, value: number) {
    item.stocks.NASDAQ = value;
    this.valueChanged.emit(item);
  }
}
