import {LOADED_FILMS_SUCCESS, LOADED_FILMS_FAILURE, LOADED_GENRES_SUCCESS, LOADED_GENRES_FAILURE} from '../actionTypes'

const filmsLoaded = (films) => ({
    type: LOADED_FILMS_SUCCESS,
    payload: films
});

const filmsFailed = (error) => ({
    type: LOADED_FILMS_FAILURE,
    payload: error
});

const genresLoaded = (genres) => ({
    type: LOADED_GENRES_SUCCESS,
    payload: genres
});

const genresFailed = (error) => ({
    type: LOADED_GENRES_FAILURE,
    payload: error
});


const fetchFilms = getFilms => async (dispatch) => {
    try {
        const data = await getFilms();

        dispatch(filmsLoaded(data))

    } catch (error) {
        dispatch(filmsFailed(error))
    }
};

const fetchGenres = getGenres => async (dispatch) => {
    try {
        const data = await getGenres();

        dispatch(genresLoaded(data))
    } catch (error) {
        dispatch(genresFailed(error))
    }
};

export {fetchFilms, fetchGenres}

