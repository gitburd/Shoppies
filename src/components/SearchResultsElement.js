import React from 'react'
import { connect } from 'react-redux'
import {addNomination} from '../store/actions/actions'

const SearchResultsElement = ({movie, addNomination, nominations}) => {
    console.log('sup?', movie)

    const add = () => {
        addNomination(movie);
    }

    const disableBtn = () => {
        let disable = false
        if(nominations && nominations.length >= 5){
            disable = true
        }
        if(nominations && nominations.length > 0){
            if (nominations.includes(movie)){
                disable = true
            }
        }
        return disable;
    }

    return (
        <div>
            {movie.Title} {movie.Year}
            <button onClick={add} disabled={disableBtn()}>NOMINATE</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addNomination: (movie) => dispatch(addNomination(movie))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsElement);