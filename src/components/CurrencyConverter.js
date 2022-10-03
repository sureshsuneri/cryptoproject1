import React from 'react';
import axios from "axios";
import { useState } from 'react';
import Exchange from "./Exchange";



function CurrencyConverter() {
    const cryptos = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
    const [chosenPrimary, setchosenPrimary] = useState("BTC");
    const [chosenSecondary, setchosenSecondary] = useState("USD");
    const[amount,setAmount]=useState(1)
    const[exchangeRate,SetexchangeRate]=useState(0)
    const[result,setResult]=useState(0)
    

    const convert=()=>{
        

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {from_currency: chosenPrimary, 
  function: 'CURRENCY_EXCHANGE_RATE', 
  to_currency: chosenSecondary,},
  headers: {
    'X-RapidAPI-Key': '53d30f0930mshf2124c1aed6b616p17911bjsnbb96ebd46b88',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

axios.request(options)
.then(function (response) {
	console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
    SetexchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
setResult(amount *
    response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
)
})

.catch(function (error) {
	console.error(error);
});
    }

    return (
        <div className='currency-converter'>
            <h2>Currency Calculator</h2>
            <table>
<tbody>
                <tr>
                    <td>
                        Primary Currency:
                    </td>
                    <td>
                        <input type="number" value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="primary-amount" />
                    </td>
                    <td>
                        <select name="option-1" className='currency-options' value={chosenPrimary} onChange={(e) => setchosenPrimary(e.target.value)}>
                            {cryptos.map((crypto, _index) => (<option key={_index}>{crypto}</option>))}
                        </select>
                    </td>
                </tr>



                <tr>
                    <td>
                        Secondary Currency:
                    </td>
                    <td>
                        <input type="number"
                            disabled={true}
                            value={result} className="primary-amount" />
                    </td>
                    <td>
                        <select name="option-2" value={chosenSecondary} className='currency-options' onChange={(e) => setchosenSecondary(e.target.value)}>
                            {cryptos.map((crypto, _index) => (<option key={_index}>{crypto}</option>))}
                        </select>
                    </td>
                </tr>



                </tbody>
            </table>
            <button id="convert-button" onClick={convert}>Convert</button>
            <Exchange exchangeRate={exchangeRate} />
        </div>
    );
}

export default CurrencyConverter