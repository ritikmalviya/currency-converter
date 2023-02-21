import React, {useState } from "react";

const CurrencyOne = (props) => {
  const { currencyData } = props;
  const [baseCurrency, setBaseCurrency] = useState("AUD");
  const [targetCurrency, setTargetCurrency] = useState("AUD");
  const [baseAmount, setBaseAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);

  const listOptions = Object.keys(currencyData.data).map(
    (currencyName, _rate) => {
      return (
        <option key={currencyName} value={currencyName}>
          {currencyName}
        </option>
      );
    }
  );

  const convertCurrency = (e, isBaseCurrencyChange) => {
    e.preventDefault();
    const rateOfBaseCurrency = currencyData.data[baseCurrency];
    const rateOfTargetCurrency = currencyData.data[targetCurrency];
    if (isBaseCurrencyChange) {
      let amount = rateOfTargetCurrency / rateOfBaseCurrency;
      setTargetAmount(amount * baseAmount);
      console.log("Base Currency Change");
    } else {
      let amount = rateOfBaseCurrency / rateOfTargetCurrency;
      console.log("Target Currency Change");
      setBaseAmount(amount * targetAmount);
    }
    console.log(baseCurrency + " to " + targetCurrency);
  };

  return (
    <div>
      <form className="flex justify-around p-44">
        <div className="p-28 card">
          <select
            name=""
            id=""
            className="border-2 border-black px-2 py-1 rounded mb-4 w-52"
            onChange={(e) => {
              setBaseCurrency(e.target.value);
            }}
          >
            {listOptions}
          </select>
          <br />

          <input
            type="number"
            className="border-2 border-black px-2 py-1 rounded mr-4 w-52"
            name=""
            id=""
            value={baseAmount}
            onChange={(e) => {
              setBaseAmount(e.target.value);
            }}
          />
          <input
            type="submit"
            className="border-2 border-black px-2 py-1 rounded"
            value="Covert"
            onClick={(e) => convertCurrency(e, true)}
          />
        </div>
        <div className="p-28 card shadow-slate-100 ">
          <select
            name=""
            id=""
            className="border-2 border-black px-2 py-1 rounded mb-4 w-52"
            onChange={(e) => {
              setTargetCurrency(e.target.value);
            }}
          >
            {listOptions}
          </select>
          <br />

          <input
            type="number"
            className="border-2 border-black px-2 py-1 rounded mr-4 w-52"
            name=""
            id=""
            value={targetAmount}
            onChange={(e) => {
              setTargetAmount(e.target.value);
            }}
          />
          <input
            type="submit"
            className="border-2 border-black px-2 py-1 rounded"
            value="Covert"
            onClick={(e) => convertCurrency(e, false)}
          />
        </div>
      </form>
    </div>
  );
};

export default CurrencyOne;
