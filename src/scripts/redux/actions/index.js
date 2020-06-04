import {types} from '../../utils'

const filmsRequested = () => ({
    type: types.FETCH_FILMS_REQUEST
});

const filmsLoaded = (newFields) => ({
    type: types.FETCH_FILMS_SUCCESS,
    payload: newFields
});

const filmsFailed = (error) => ({
    type: types.FETCH_FILMS_FAILURE,
    payload: error
});

const fetchFilms = getFilms => async (dispatch) => {
    dispatch(filmsRequested());

    try {
        const data = await getFilms();
        dispatch(filmsLoaded(data))
        console.log(data); //eslint-disable-line
    } catch (error) {
        dispatch(filmsFailed(error))
    }
};

export {
    fetchFilms
}

