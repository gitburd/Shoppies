import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchMovies } from '../store/actions/actions'

const SearchBar = ({searchMovies}) => {
 
    const [searchText,setSearchText] = useState('')

    const onChange = e => {
        if(e.keyCode === 13) {
            searchMovies(searchText);
        } else {
            setSearchText(e.target.value);
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        searchMovies(searchText);
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="searchbar">
                <input
                    type="text"
                    name="text"
                    placeholder="Search movies..."
                    value={searchText}
                    required
                    onChange={onChange}
                    onKeyUp={onChange}
                />
                <button type="submit" className='btn-accent'> Search </button>
            </form>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        searchMovies: (searchText) => dispatch(searchMovies(searchText))
    }
  }

export default connect(null, mapDispatchToProps)(SearchBar);
