# AngularStockPrices

Dynamic display and management of stock prices.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

The table and graph are refreshed every second.
The table can be edited only if the refresh is paused.

# How to Start

1 - Start the stock server:

The server that provide the stock prices is available here:
https://github.com/o2t/tutorial-node-stock-server
start with 'node server.js'

2 - Start the App
run 'npm start' or 'ng serve'

3- Fix CORS
The app may not retrieve data from the stock server, with the following error in the console:
"No 'Access-Control-Allow-Origin' header is present on the requested resource because of Cross-Origin"
This is a server side issue, some header to support CORS must be added.

Or, in Chrome, you can download the "CORS toggle" extension to quickly circumvent the problem:
https://goo.gl/YxYfh2
