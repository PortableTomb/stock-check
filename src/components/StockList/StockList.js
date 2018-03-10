import React from 'react';
import StockListItem from '../StockListItem/StockListItem';
import './StockList.css';


const StockList = (props) => {

  const stockItem = props.stockItems.map((stock) => {
    
      return (
        <StockListItem key={ stock.symbol }
                       symbol={ stock.symbol }
                       price={ stock.price }
                       volume={ stock.volume }
                       timestamp={ stock.timestamp } />
      );
  });

  return (
    <ul className="StockList">
      { stockItem }
    </ul>
  )
}

export default StockList;
