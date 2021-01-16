import React from 'react'
import { connect } from 'react-redux'

const SearchBar = ({msg}) => {
    return (
        <div>
            <h1>SearchBar</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        msg: state.msg
    }
}

export default connect(mapStateToProps)(SearchBar);