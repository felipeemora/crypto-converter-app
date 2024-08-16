import { InferOutput } from "valibot";
import { CryptoCurrencyResponseSchema, CryptoPriceSchema, CurrencySchema, PairSchema } from "../schema/crypto-schema";

export type Currency = InferOutput<typeof CurrencySchema>;
export type Cryptocurrency = InferOutput<typeof CryptoCurrencyResponseSchema>;
export type Pair = InferOutput<typeof PairSchema>;
export type CryptoPrice = InferOutput<typeof CryptoPriceSchema>;