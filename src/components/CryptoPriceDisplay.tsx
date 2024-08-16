import { useMemo } from "react";
import { useCyptoStore } from "../store"
import { Spinner } from "./Spinner";

export const CryptoPriceDisplay = () => {

  const result = useCyptoStore((state) => state.result);
  const loading = useCyptoStore((state) => state.loading);

  const hasResult = useMemo(() => !Object.values(result).includes(''), [result]);

  return (
    <div className="result-wrapper">
      {
       loading ? <Spinner /> : hasResult && (
          <>
            <h2>Cotización</h2>
            <div className="result">
              <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Img cryptomoneda" />
              <div>
                <p>El precio es de: <span>{result.PRICE}</span></p>
                <p>El precio más alto del día: <span>{result.HIGHDAY}</span></p>
                <p>El precio más bajo del día: <span>{result.LOWDAY}</span></p>
                <p>Variación últimas 24 hrs: <span>{result.CHANGEPCT24HOUR}</span></p>
                <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
