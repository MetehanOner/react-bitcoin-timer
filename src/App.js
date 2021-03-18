import React from 'react'
import './App.css';
import {useEffect, useState} from 'react';
import Bitcoin from './Bitcoin';

const BINANCE_API_LINK = 'wss://stream.binance.com:9443/ws/btcusdt@trade';


function App() {

  const [data, setData] = useState([]);
  //const [info, setScreen] = useState([]);

  
    useEffect(() => {

      const socketci = new WebSocket(BINANCE_API_LINK);
      socketci.addEventListener('message', function (event) {
        let messageObject = JSON.parse(event.data);
        //console.log('Message from server ', messageObject);
        setData(param => [...param, messageObject]);

      });
    }, []);


  return (
  <div className='bitcoin-app'>
   <div className='bitcoin-board'></div>
    <div className='bitcoin-text'></div>
     <div className='bitcoin-price-table'></div>
      <div className='bitcoin-timer'></div>
    
    <div>
    {data.map(data => {
      return(
       <Bitcoin time={data.t}
       price = {data.p} />
      )
      })}
   </div>
  </div>

    
  );
}

export default App;
