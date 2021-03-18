import React from 'react'

const Bitcoin = ({time, price}) => {
    return (
        <div className='bitcoin-container'>
            <div className='bitcoin-row'>
                <div className='bitcoin'>
                    
                    <h1>Bitcoin</h1>
                    <p className='bitcoin-time'>{time}</p>
                </div>
            </div>
                <div className='bitcoin-data'>
                    <p className='bitcoin-price'>${price}</p>
                </div>
        </div>            
    );
    
};

export default Bitcoin
