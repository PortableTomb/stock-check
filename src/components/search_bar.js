import React from 'react';

function SearchBar(props) {

    return  (
      <div className="search-bar">
        <form>
          <input value={ props.value }
                 onChange={ props.onChange } />
          <button onClick={ props.onClick }>search</button>
        </form>
      </div>
    );
}

export default SearchBar;
