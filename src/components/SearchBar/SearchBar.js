import React from 'react';
import './SearchBar.css';

function SearchBar(props) {

    return  (
      <div className="SearchBar">
        <form className="SearchBar_Form">
          <input className="SearchBar__Input"
                 value={ props.value }
                 onChange={ props.onChange } />
          <button className="SearchBar__Button" onClick={ props.onClick }>search</button>
        </form>
      </div>
    );
}

export default SearchBar;
