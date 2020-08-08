import React from 'react'

const SearchBar = props => {
  return (
    <form onSubmit={ event => props.handleSearchSubmit( event ) } className="ui form">
      <div className="field">
        <label >Search Movie Reviews: </label>
        <input
          onChange={event => props.updateSearchTerm(event.target.value)}
          value={props.searchTerm}
          type='text'
          placeholder="Search reveiws..." 
          style={{ width: '230px' }}
          ></input>
      </div>
      <button
        className='ui blue button'
        type='submit'
        >Find Reviews</button>
    </form>
  )
}

export default SearchBar
