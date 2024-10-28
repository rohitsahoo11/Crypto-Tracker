import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import CryptoList from './components/CryptoList';

function App() {

  const [loading, setLoading] = useState(true)
  const [cryptoData, setCryptoData] = useState([])
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  const fetchCryptoPrice = async()=>{
    setLoading(true)
    
    const crypto_api = process.env.REACT_APP_CRYPTO_API_URL

    try {
      const response = await axios.get(
        `${crypto_api}`,
        {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: '100',
            page: '1'
          }
        }
      )
      setCryptoData(Array.isArray(response.data) ? response.data : [])
      setError(null)
    } catch (error) {
      setError('Failed to fetch crypto data')
    }
    setLoading(false)
  }


  useEffect(()=>{
    fetchCryptoPrice()
    const interval = setInterval(fetchCryptoPrice, 100000)
    return () => clearInterval(interval)
  },[])


  const inputSearch = (event)=>{
    setSearch(event.target.value)
  }

  const searchCrypto = Array.isArray(cryptoData)
    ? cryptoData.filter((crypto) =>
      crypto.name.toLowerCase().includes(search.toLowerCase())
  )
  :[]

  

  return (
    <div className="App">
      <h1 style={{ fontFamily: 'Roboto, sans-serif', color: '#333', textAlign: 'center', marginTop: '20px' }}>Crypto Price Tracker</h1>
      <input
        type='text'
        placeholder='Search for a crypto'
        value={search}
        onChange={inputSearch}
      />
      
      { loading ? (
        <p>Loading Data...</p>
      ): error ? (
        <p>{error}</p>
      ) : (
        <CryptoList
          cryptoData={searchCrypto}
        />
      )

    }
    </div>
  );
}

export default App;
