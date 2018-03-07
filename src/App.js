import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/search_bar';
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
      term: this.state.value,
      stocks: this.state.stocks
    });
    let term = this.state.value;
    const key = 'F41ON15LGCFM4PR7';
    const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${term}&apikey=${key}`;

    axios.get(axios.get(url)
    .then(res => {
      console.log(res.data['Stock Quotes']);
      const stocks = Array.from(res.data['Stock Quotes']).map((stock) => [{symbol: stock.symbol, price: stock.price}]);
      console.log(stocks);
    })
    .catch(error => console.log(error))
    )

  }

  render () {
    const value = this.state.value;
    return (
      <div className="App">
        <h1>Stock Search</h1>
        <SearchBar value={ value }
                   onChange={ this.handleChange }
                   onClick={ this.handleClick }/>
      </div>
    );
  }
}

export default App;
