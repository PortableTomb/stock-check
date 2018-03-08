import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './components/search_bar';
import StockList from './components/StockList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stocks: [],
      term: null,
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e) {
    if(e) e.preventDefault();
    this.setState({
      value: '',
      term: this.state.value
    });

    let term = this.state.value;
    const key = 'F41ON15LGCFM4PR7';
    const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${term}&apikey=${key}`;

    axios.get(axios.get(url)
    .then(res => {
      let stocks = Array.from(res.data['Stock Quotes']).map((stock) => [{symbol: stock['1. symbol'], price: stock['2. price'], volume: stock['3. volume'], timestamp: stock['4. timestamp']}]);

      this.setState((state, props) => {
        return {
          ...state,
        stocks
        }
      })
    })
    .catch(error => console.log(error))
    )
  }

  render () {
    let stocks = this.state.stocks;
    const value = this.state.value;
    return (
      <div className="App">
        <h1>Stock Search</h1>
        <SearchBar value={ value }
                   onChange={ this.handleChange }
                   onClick={ this.handleClick }/>
        <StockList stockItems={ stocks }/>
      </div>
    );
  }
}

export default App;
