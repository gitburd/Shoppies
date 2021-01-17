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
                    5 Nominees is the limit</p>
                </div>
            }
            {nominations && nominations.length > 0 &&
            <ol>
                {nominations.map((movie,idx) => 
                    <li key={idx}>
                        <NominationsElement movie={movie}/>
                    </li>
                )}    
            </ol>
            
            }
            <div className='thumbnails'>
            {nominations && nominations.length > 0 &&
                nominations.map((movie,idx) => 
                   <>
                       {movie.Poster !== "N/A" && 
                        <img className="thumbnail" src={movie.Poster} />
                       }
                    </>                    
                )
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

export default connect(mapStateToProps)(Nominations);