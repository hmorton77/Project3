import React from 'react';
import StockRow from '../ticker/StockRow';

function Stocks () {
    return (
        <div>
            <p>Stock Info</p>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Open</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Close</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <StockRow ticker="AAPL" />
                        <StockRow ticker="GOOG" />
                        <StockRow ticker="MSFT" />
                        <StockRow ticker="AMZN" />
                        <StockRow ticker="TSLA" />
                    </tbody>
                </table>
            </div>
        </div>
    
    )
}

export default Stocks;