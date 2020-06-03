import {types} from '../utils'

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

const fetchFilms =  (service, dispatch) => async () => {
    dispatch(filmsRequested());

    try {
        const data = await service.getFilms();
        dispatch(filmsLoaded(data))
    } catch (error) {
        dispatch(filmsFailed(error))
    }
};

export {
    fetchFilms
}
