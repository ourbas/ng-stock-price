import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { StockValue } from '../../models/stock-value.model';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockTableComponent implements OnInit {
  @Input() data: StockValue[];

  constructor() {}

  ngOnInit() {}
}
