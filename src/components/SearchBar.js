import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchMovies } from '../store/actions/actions'

const SearchBar = ({msg, searchMovies}) => {
 
    const [searchText,setSearchText] = useState('')

    const onChange = e => {
        if(e.keyCode === 13) {
            console.log(searchText, 'submit')
            searchMovies(searchText)
            setSearchText('')
        } else {
            setSearchText(e.target.value);
            console.log('change', searchText);
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        searchMovies(searchText)
        console.log(searchText, 'submit')
        setSearchText('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="text"
                placeholder="Search movies..."
                value={searchText}
                required
                onChange={onChange}
                onKeyUp={onChange}
            />
            <button type="submit"> Search </button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        msg: state.msg
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        searchMovies: (searchText) => dispatch(searchMovies(searchText))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
