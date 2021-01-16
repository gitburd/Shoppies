import React from 'react'
import { connect } from 'react-redux'

const SearchResults = ({msg}) => {
    return (
        <div>
            <h1>Search Results</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        msg: state.msg
    }
}

export default connect(mapStateToProps)(SearchResults);