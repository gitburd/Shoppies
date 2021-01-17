import React from 'react'
import { connect } from 'react-redux'
import NominationsElement from './NominationsElement'
const Nominations = ({nominations}) => {
    
    return (
        <div>
            <h2>Nominees</h2>
            {nominations && nominations.length === 5 &&
                <div className='banner'>
                    <p>Great Choices!
                    <br/>
                    5 Nominees is the limit.</p>
                </div>
            }
            {nominations && nominations.length > 0 &&
            <ol>
                {nominations.map((movie,idx) => 
                    <li>
                        <NominationsElement movie={movie} key={idx}/>
                    </li>
                )}    
            </ol>
            
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(Nominations);