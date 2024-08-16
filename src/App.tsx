import { CriptoSeachForm } from "./components/CriptoSeachForm"
import { CryptoPriceDisplay } from "./components/CryptoPriceDisplay";
import { useCyptoStore } from './store';
import { useEffect } from "react";

function App() {

  const fetchCryptos = useCyptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  })
  
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSeachForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
