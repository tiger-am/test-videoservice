import {LOADED_FILMS_SUCCESS, LOADED_FILMS_FAILURE} from '../actionTypes'

const filmsLoaded = (newFields) => ({
    type: LOADED_FILMS_SUCCESS,
    payload: newFields
});

const filmsFailed = (error) => ({
    type: LOADED_FILMS_FAILURE,
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

export {
    fetchFilms
}

