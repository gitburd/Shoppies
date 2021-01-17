import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initState = {
   nominations:[]
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "SEARCH_MOVIES":
            console.log('reducer', action.movies)
            return {
                ...state,
                searchResults: action.movies,
                searchText: action.searchText
            }
        case "ADD_NOMINATION":
            console.log('ADD', action.movie)
            return {
                ...state,
                nominations: [...state.nominations, action.movie]
            }
        case "REMOVE_NOMINATION":
        console.log('reducer', action.movie)
        const filteredNominations = state.nominations.filter(movie => {return movie.Title !== action.movie.Title})
        return {
            ...state,
            nominations: filteredNominations
        }
        default :
            return state;
    }
}

const persistConfig = {
    key: 'root',
    storage: storage
};

export default persistReducer(persistConfig,rootReducer);