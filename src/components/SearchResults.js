import React from 'react'
import { connect } from 'react-redux'
import SearchResultsElement from './SearchResultsElement'

const SearchResults = ({searchResults, searchText}) => {
    console.log('sup?', searchResults)
    return (
        <div>
            {!searchText && <h2>Search for movies to nominate!</h2>}
            {searchText && <h2>Results for "{searchText}"</h2>}
            {searchResults && searchResults.length > 0 && (
                searchResults.map((movie, idx) => 
                    <SearchResultsElement key={idx} movie={movie}/>
                )
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults,
        searchText: state.searchText
    }
}

export default connect(mapStateToProps)(SearchResults);