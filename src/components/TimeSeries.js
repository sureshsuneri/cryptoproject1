import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Coin from './Coin';
export default function TimeSeries() {
    //https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false
 
const[coins,setCoins]=useState([])
const[search,setSearch]=useState("")

    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        ).then((res)=>{
            setCoins(res.data)
            console.log(res.data);

        }).catch((error)=>{console.log(error)})
    },[])
const handleChange=(e)=>{
    setSearch(e.target.value)
}
const filterCoins=coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div><div className="coin-search">
            <h1>
                Find Your Crypto
            </h1>
            <form>
                <input type="text" placeholder='search' className='coin-input' onChange={handleChange} />
            </form>
        </div>
        {filterCoins.map(coin=>{
            return(
                <Coin
                Key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                volume={coin.market_cap}
                />
            )
        })}
        </div>
    );
}
