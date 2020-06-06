import {
    LOADED_FILMS_SUCCESS,
    LOADED_FILMS_FAILURE,
    LOADED_GENRES_SUCCESS,
    LOADED_GENRES_FAILURE
} from '../actionTypes'
import { useStorage } from "hooks/useStorage";

export const filmsLoaded = (films) => ( {
    type: LOADED_FILMS_SUCCESS,
    payload: films
} );

export const filmsFailed = (error) => ( {
    type: LOADED_FILMS_FAILURE,
    payload: error
} );

export const genresLoaded = (genres) => ( {
    type: LOADED_GENRES_SUCCESS,
    payload: genres
} );

export const genresFailed = (error) => ( {
    type: LOADED_GENRES_FAILURE,
    payload: error
} );

const { setData } = useStorage();

export const fetchFilms = getFilms => async (dispatch) => {
    try {
        const data = await getFilms();

        dispatch(filmsLoaded(data));
        setData('films', data);
    } catch (error) {
        dispatch(filmsFailed(error));
    }
};

export const fetchGenres = getGenres => async (dispatch) => {
    try {
        const data = await getGenres();

        dispatch(genresLoaded(data));
        setData('genres', data);
    } catch (error) {
        dispatch(genresFailed(error));
    }
};


