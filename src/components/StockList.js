import React from 'react';
import StockListItem from './StockListItem';

import _ from 'lodash';

const StockList = (props) => {
console.log(props);

  const stockItem = props.stockItems.map((stock) => {
    console.log(stock);
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
