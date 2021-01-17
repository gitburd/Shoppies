import React from 'react'
import { connect } from 'react-redux'
import {removeNomination} from '../store/actions/actions'

const NominationsElement = ({movie, removeNomination}) => {
    console.log('sup?', movie)

    const remove = () => {
        // e.preventDefault();
        removeNomination(movie);
    }
    return (
        <div>
            {movie.Title} ({movie.Year})
            <button className='btn' onClick={remove}>REMOVE</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // searchResults: state.searchResults
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeNomination: (movie) => dispatch(removeNomination(movie))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NominationsElement);