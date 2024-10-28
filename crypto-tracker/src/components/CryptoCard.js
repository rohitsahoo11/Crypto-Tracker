import React from 'react'

const CryptoCard = ({crypto}) => {
  return (
    <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px', textAlign: 'center', maxWidth: '300px', margin: '10px', backgroundColor: '#fff' }}>
      <img 
      src={crypto.image} 
      alt={crypto.name} 
      style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }}>
      </img>
      <h2 
      style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>
        {crypto.name} ({crypto.symbol.toUpperCase()})
      </h2>
      <p 
      style={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>
        Current Price: ${crypto.current_price.toFixed(2)}
      </p>
    </div>
  )
}

export default CryptoCard