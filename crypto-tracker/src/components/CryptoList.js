import React from 'react'
import CryptoCard from './CryptoCard'


const CryptoList = ({cryptoData}) => {
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {cryptoData.map((crypto)=>(
        <CryptoCard
          key={crypto.id}
          crypto={crypto}
          style={{ width: '300px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}
        />
      ))}
    </div>
  )
}

export default CryptoList