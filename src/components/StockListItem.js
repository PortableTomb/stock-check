import React from 'react';

const StockListItem = (stock, props) => {

  return (
    <li className="StockListItem">
      <div className="StockListItem_Symbol">{ stock.symbol }</div>
      <div className="StockListItem_Price">${ parseInt(stock.price).toFixed(2) }</div>
      <div className="StockListItem_Volume">{ stock.volume }</div>
      <div className="StockListItem_Time">{ stock.timestamp }</div>
    </li>
  )
}
export default StockListItem;
