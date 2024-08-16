import { create } from "zustand";
import { Cryptocurrency, CryptoPrice, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos, getCurrentCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[],
  result: CryptoPrice,
  loading: boolean,
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>
}

export const useCyptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptocurrencies: [],
  result: {
    IMAGEURL: '',
    PRICE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE: ''
  },
  loading: false,
  fetchCryptos: async () => {
    const cryptocurrencies = await getCryptos();
    set(() => ({
      cryptocurrencies
    }), false, { type: 'fetchCryptos' })
  },
  fetchData: async(pair) => {
    set(() => ({
      loading: true
    }), false, { type: 'fetchData' })
    const result = await getCurrentCryptoPrice(pair);
    set(() => ({
      loading: false,
      result
    }), false, { type: 'fetchData' })
  }
})));