

import { useEffect, useState } from "react";

interface CurrencyData {
  [currency: string]: number;
}

function useCurrencyInfo(currency: string): CurrencyData {
  const [data, setData] = useState<CurrencyData>({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res: CurrencyData) => setData(res))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
