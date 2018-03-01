export interface StockValue {
  index: number;
  timestamp: number;
  stocks: {
    NASDAQ: number;
    CAC40: number;
  };
}
