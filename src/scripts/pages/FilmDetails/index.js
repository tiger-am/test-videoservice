import React, { useCallback, useEffect, useState } from "react";
import withLayout from "components/HOC/withLayout";
import Spinner from "components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import useService from "hooks/useService";
import { fetchFilms, fetchComments, removeComment, addComment } from "actions/films";
import { useStorage } from 'hooks/useStorage';

const getCommentByFilmId = (id) => ({ films }) => films.comments.filter(({ filmId }) => id === filmId);

function FilmDetails({ match, history }) {
    const { loading: loadingRequest, getFilms, getComments } = useService();
    const dispatch = useDispatch();
    const films = useSelector(({ films }) => films.films);
    const commentsStore = useSelector(({ films }) => films.comments);
    const user = useSelector(({ user }) => user);
    const filmId = +match.params.id;
    const comments = useSelector(getCommentByFilmId(filmId));
    const [ loading, setLoading ] = useState(true);
    const [ film, setFilm ] = useState({});
    const [ newCommentValue, setNewCommentValue ] = useState('');

    const idx = films.findIndex(item => item.id === filmId);

    const loadFilms = useCallback(() => {
        dispatch(fetchFilms(getFilms));
    }, [ dispatch, fetchFilms, getFilms ]);

    const loadComments = useCallback(() => {
        dispatch(fetchComments(getComments));
    }, [ dispatch, fetchComments, getComments ]);

    const goBack = () => {
        history.goBack();
    };

    useEffect(() => {
        const { getData } = useStorage();
        if (!getData('comments')) {
            loadComments();
        }
    }, [ commentsStore ]);

    useEffect(() => {

        if (idx > -1) {
            setLoading(false);
            setFilm(films[idx]);
        } else {
            // loadComments()
            loadFilms();
        }

    }, [ films ]);

    const handleRemoveComment = (id) => {
        dispatch(removeComment(id));
    };

    const handleAddComment = (e) => {
        e.preventDefault();

        if (!newCommentValue) return;

        const newComment = {
            id: new Date().getTime(),
            filmId: filmId,
            userId: user.id,
            userName: user.login,
            text: newCommentValue
        };

        setNewCommentValue('');
        dispatch(addComment(newComment));
    };

    const handleChangeComment = (e) => {
        setNewCommentValue(e.target.value);
    };

    if (loading || loadingRequest) return <Spinner/>;

    const { title, image, country, genre, description } = film;

    return (
        <main className="page container">
            <h1 className="hide">{title}</h1>

            <div className="film-details">
                <button type="button" className="back-link" onClick={goBack}>
                    <span className="hide">Назад</span>
                </button>

                <div className="film-details__container">
                    <div className="film-details__image">
                        <img src={image} alt={title}/>
                    </div>

                    <div className="film-details__content">
                        <table>
                            <tbody>
                            <tr>
                                <td className="text-p1">Название:</td>
                                <td className="title-h3">{title}</td>
                            </tr>

                            <tr>
                                <td className="text-p1">Страна:</td>
                                <td className="text-p2">{country}</td>
                            </tr>

                            <tr>
                                <td className="text-p1">Жанр:</td>
                                <td className="text-p2">{genre}</td>
                            </tr>
                            </tbody>
                        </table>

                        <p className="film-details__description">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="comments">
                <h2 className="title-h3 comments__title">Комментарии</h2>

                <div className="comments__container">
                    {!!user.id ? (
                        <form className="comments-form" onSubmit={handleAddComment}>
                            <label>
                                <textarea
                                    name="new-comment"
                                    className="comments-form__field"
                                    id="new-comment"
                                    placeholder="Введите комментарий..."
                                    value={newCommentValue}
                                    onChange={handleChangeComment}
                                />
                            </label>

                            <button
                                type="submit"
                                className="btn btn--primary comments-form__btn"
                            >
                                Опубликовать
                            </button>
                        </form>
                    ) : (
                        <div className="comments-form" style={{ textAlign: 'left' }}>
                            Чтобы оставить комментарий, авторизуйтесь
                        </div>
                    )}

                    {!!comments.length && (
                        <ul className="comments-list">
                            {comments.map(({ id, userId, userName, text }) => (
                                <li className="comments-item" key={id}>
                                    <p className="title-h4 comments-item__username">{userName}</p>

                                    <p className="text-p1 comments-item__text">
                                        {text}
                                    </p>

                                    {userId === user.id && (
                                        <button
                                            type="button"
                                            className="comments-item__delete delete"
                                            onClick={() => handleRemoveComment(id)}
                                        >
                                            <span className="hide">Удалить</span>
                                        </button>
                                    )}
                                </li>
                            ))
                            }
                        </ul>
                    )

                    }

                </div>
            </div>
        </main>
    );
}

export default withLayout(FilmDetails);