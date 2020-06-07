import {
    LOADED_FILMS_SUCCESS,
    LOADED_FILMS_FAILURE,
    LOADED_GENRES_SUCCESS,
    LOADED_GENRES_FAILURE,
    LOADED_COMMENTS_SUCCESS,
    LOADED_COMMENTS_FAILURE,
    ADD_COMMENT,
    REMOVE_COMMENT
} from '../actionTypes';

import { useStorage } from "hooks/useStorage";

const { setData, getData } = useStorage();

export const filmsLoaded = (films) => ({
    type: LOADED_FILMS_SUCCESS,
    payload: films
});

export const filmsFailed = (error) => ({
    type: LOADED_FILMS_FAILURE,
    payload: error
});

export const genresLoaded = (genres) => ({
    type: LOADED_GENRES_SUCCESS,
    payload: genres
});

export const genresFailed = (error) => ({
    type: LOADED_GENRES_FAILURE,
    payload: error
});

export const commentsLoaded = (comments) => ({
    type: LOADED_COMMENTS_SUCCESS,
    payload: comments
});

export const commentsFailed = (error) => ({
    type: LOADED_COMMENTS_FAILURE,
    payload: error
});

export const fetchComments = getComments => async (dispatch) => {
    try {
        const data = await getComments();

        dispatch(commentsLoaded(data));
        setData('comments', data);
    } catch (error) {
        dispatch(commentsFailed(error));
    }
};

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

export const addComment = (comment) => {
    const comments = getData('comments');

    setData('comments', [
        { ...comment },
        ...comments
    ]);

    return {
        type: ADD_COMMENT,
        payload: comment
    };
};

export const removeComment = (commentId) => {
    const comments = getData('comments');

    const idx = comments.findIndex(({ id }) => id === commentId);
    const newComments = [
        ...comments.slice(0, idx),
        ...comments.slice(idx + 1),
    ];

    setData('comments', newComments);

    return {
        type: REMOVE_COMMENT,
        payload: commentId
    };
};
