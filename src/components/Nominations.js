import React from 'react'
import { connect } from 'react-redux'
import NominationsElement from './NominationsElement'
const Nominations = ({nominations}) => {
    
    return (
        <div>
            <h2>Nominations</h2>
            {nominations && nominations.length === 5 &&
                <>
                <p>Great Choices!</p>
                <p>5 Nominations is the limit. Remove a title to add another.</p>
                </>
            }
            {nominations && nominations.length > 0 &&
            nominations.map((movie,idx) => 
                <NominationsElement movie={movie} key={idx}/>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(Nominations);