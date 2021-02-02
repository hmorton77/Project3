import React, { useEffect } from 'react';
import { getDailyStocks } from '../utils/api';


const Stock = () => {
    useEffect(() => {
        const fetchStockData = async () => {
            const result = await getDailyStocks('AAPL');

            console.log(result.data)
        }
            fetchStockData()
    }, []);

    return (
        <div>
            <p>Stock Info</p>
        </div>
    )
}

export default Stock;