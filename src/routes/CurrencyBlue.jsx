import axios from "axios";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Currencies from "../components/CurrencyList";

function CurrencyBlue() {
  const { setCurList, setLoading } = useOutletContext();

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);

        const res = await axios.get(
          `https://exchange.vcoud.com/coins/latest?type=currencyBlue&base=usd`,
        );

        setCurList(res.data);
        setLoading(false);
      })();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Currencies />
    </>
  );
}

export default CurrencyBlue;
