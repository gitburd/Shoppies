import React from 'react'
import { connect } from 'react-redux'
import Nominations from './Nominations'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

const Dashboard = ({searchResults}) => {
    return (
        <div>
            <header>
                <h1>The Shoppies</h1>
            </header>
            <main>
                <section>
                    <Nominations/>
                </section>
                <section>
                    <SearchBar/>
                    <SearchResults/>
                </section>               
            </main>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults
    }
}

export default connect(mapStateToProps)(Dashboard);