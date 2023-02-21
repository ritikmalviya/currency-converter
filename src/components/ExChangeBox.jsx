import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CurrencyOne from './CurrencyOne'

const ExChangeBox = () => {
//     const currencyData = {
//   "data": {
//     "AUD": 1.486352,
//     "BGN": 1.84258,
//     "BRL": 5.293808,
//     "CAD": 1.352752,
//     "CHF": 0.929401,
//     "CNY": 6.960113,
//     "CZK": 22.801628,
//     "DKK": 6.991014,
//     "EUR": 0.940131,
//     "GBP": 0.831521,
//     "HKD": 7.800663,
//     "HRK": 7.096712,
//     "HUF": 377.020511,
//     "IDR": 15620.015654,
//     "ILS": 3.519135,
//     "INR": 82.776474,
//     "ISK": 142.990245,
//     "JPY": 133.489256,
//     "KRW": 1272.606855,
//     "MXN": 19.477138,
//     "MYR": 4.423006,
//     "NOK": 9.829948,
//     "NZD": 1.594253,
//     "PHP": 55.825087,
//     "PLN": 4.40037,
//     "RON": 4.633007,
//     "RUB": 70.000078,
//     "SEK": 10.478293,
//     "SGD": 1.348102,
//     "THB": 34.630051,
//     "TRY": 18.662019,
//     "USD": 1,
//     "ZAR": 17.208534
//   }
// }
    
    const [currencyData, setCurrencyData] = useState(null)
    
    const fetchCurrencyData = async ()=>{
       const response = await axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=nVVhj61A2gAN2vAfriKT8yyIQWVIIQCCHqLVWpfe')
      //  response.json
       console.log("This is fetchCurrencyData function ", response.data)
      const data = response.data
      return setCurrencyData(data)
    
    }

    useEffect(() => {
      fetchCurrencyData()
      // console.log("This is useEffect", currencyData)
    }, [])
    
    return (
      <div className='bg-slate-700 pt-16'>
        <h1 className='text-6xl text-white text-center'>Currency Converter</h1>
        {currencyData ? <CurrencyOne currencyData={currencyData}/> : null}
      </div>  
  )
}

export default ExChangeBox