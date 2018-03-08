import React from 'react';

const StockListItem = (stock, props) => {
  console.log(stock);

  return (
    <li className="StockListItem">
      <div className="StockListItem_Symbol">{ stock.symbol }</div>
      <div className="StockListItem_Price">{ stock.price }</div>
      <div className="StockListItem_Volume">{ stock.volume }</div>
      <div className="StockListItem_Time">{ stock.time }</div>
    </li>
  )
}
export default StockListItem;
