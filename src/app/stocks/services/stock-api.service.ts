import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { StockValue } from '../models/stock-value.model';

const API_URL = 'http://localhost:8000';

@Injectable()
export class StockApiService {
  constructor(private http: HttpClient) {}

  getAllStocks(): Observable<StockValue[]> {
    return this.http.get<StockValue[]>(API_URL);
  }

  getStocks(count: number): Observable<StockValue[]> {
    return this.http.get<StockValue[]>(`${API_URL}?count=${count}`);
  }

  getDebug(): Observable<StockValue[]> {
    return this.http.get<StockValue[]>('assets/db.json');
  }
}
