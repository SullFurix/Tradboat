const config = require("./config.js");
const Binance = require('node-binance-api');
const binance = new Binance();

const binanceOptions = {
	APIKEY: config.api_key,
	APISECRET: config.api_secret
};

binance.options(binanceOptions);
