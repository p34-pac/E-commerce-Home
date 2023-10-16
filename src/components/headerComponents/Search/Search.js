import React, { Component } from 'react'
import './search.css'

class Search extends Component {
  render() {
    return (
      <div className='searchBar'>
        <select className="searchFilter" name='searchFilter'>
            <option name="option1" value='option1'>option1</option>
            <option name="option2" value='option2'>option2</option>
            <option name="option3" value='option3'>option1</option>
        </select>
        <div className='searchInput'>
            <input type='text' />
        </div>
        <div className='searchBtn'>
            <button></button>
        </div>
      </div>
    )
  }
}

export default Search