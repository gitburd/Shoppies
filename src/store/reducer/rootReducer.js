const initState = {
    msg: 'root reducer connected!'
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "SEARCH_MOVIES":
            console.log('reducer', action.movies)
            return {
                ...state,
                searchResults: action.movies
            }
        default :
            return state;
    }
}

export default rootReducer;