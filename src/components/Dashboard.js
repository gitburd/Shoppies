import React from 'react'
import { connect } from 'react-redux'
import Nominations from './Nominations'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

const Dashboard = ({msg}) => {
    return (
        <div>
            <h1>Shoppies!</h1>
            <p>{msg}</p>
            <Nominations/>
            <SearchBar/>
            <SearchResults/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        msg: state.msg
    }
}

export default connect(mapStateToProps)(Dashboard);