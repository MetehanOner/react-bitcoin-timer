import React from 'react'
import './App.css';
import {useEffect, useState} from 'react';

const BINANCE_API_LINK = 'wss://stream.binance.com:9443/ws/btcusdt@trade';


function App() {

  const [data, setData] = useState([]);

  
    useEffect(() => {
      const socketci = new WebSocket(BINANCE_API_LINK);
      socketci.addEventListener('message', function (event) {
        let messageObject = JSON.parse(event.data);
        //console.log('Message from server ', messageObject.p);
        setData(param => [...param, messageObject]);
        //console.log('every put fine')
      });

      
    }, []);
  return (
    <div>
     <ul>
      {data.map((datas, index) => (<li key={index}>{datas.p}</li>))
      }
     </ul>
    </div>
  );
}

export default App;
