import React from 'react';
import './StockListItem.css';

const StockListItem = (stock, props) => {

  return (
    <li className="StockListItem">
      <div className="StockListItem_Symbol"><span>Stock: </span>{ stock.symbol }</div>
      <div className="StockListItem_Price"><span>Price: </span>${ parseInt(stock.price).toFixed(2) }</div>
      <div className="StockListItem_Volume"><span>Vol: </span>{ stock.volume }</div>
      <div className="StockListItem_Time"><span>Time: </span>{ stock.timestamp }</div>
    </li>
  )
}
export default StockListItem;
