import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema";
import { Cryptocurrency, CryptoPrice, Pair } from "../types";
import { parse } from "valibot";

export async function getCryptos(): Promise<Cryptocurrency[]> {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
  const {data: { Data }} = await axios(url);
  const result = parse(CryptoCurrenciesResponseSchema, Data);
  if (result) {
    return result;
  }
  return [];
}

export async function getCurrentCryptoPrice(pair: Pair): Promise<CryptoPrice> {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
  const { data: { DISPLAY } } = await axios(url);

  const result = parse(CryptoPriceSchema, DISPLAY[pair.cryptocurrency][pair.currency]);

  if (result) {
    return result;
  }

  return {
    IMAGEURL: '',
    PRICE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE: ''
  };
} 