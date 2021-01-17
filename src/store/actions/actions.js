export const searchMovies = (searchText) => {
    // console.log(searchText)
    return (dispatch, getState) => {
        let proxyUrl = process.env.REACT_APP_CORS_ANYWHERE
        let targetUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchText}`

        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(movies => {
            console.log(searchText, movies)
            dispatch({ type:'SEARCH_MOVIES', searchText, movies: movies.Search })
        }) 
        .catch((err)=>{
            console.log(err)
            dispatch({type:'SEARCH_MOVIES_ERROR', err})
        })
    }
}

export const addNomination = (movie) => {
    return (dispatch, getState) => { 
        dispatch({ type:'ADD_NOMINATION', movie})
    } 
}

export const removeNomination = (movie) => {
    return (dispatch, getState) => { 
        dispatch({ type:'REMOVE_NOMINATION', movie})
    } 
}

