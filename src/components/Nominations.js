import React from 'react'
import { connect } from 'react-redux'

const Nominations = ({msg}) => {
    return (
        <div>
            <h1>Nominations</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        msg: state.msg
    }
}

export default connect(mapStateToProps)(Nominations);