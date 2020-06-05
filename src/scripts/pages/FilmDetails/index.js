import React, {useEffect, useState} from "react";
import withLayout from "components/HOC/withLayout";
import Spinner from "components/Spinner";
import {useSelector} from "react-redux";

function FilmDetails({match}) {
    const films = useSelector(({films}) => films.films)
    const id = +match.params.id

    const idx = films.findIndex(item => {
        console.log(item.id === id); //eslint-disable-line
        return item.id === +id
    })

    const [loading, setLoading] = useState(true);
    const [film, setFilm] = useState({});

    console.log(films, idx, id); //eslint-disable-line

    useEffect(() => {
        if (idx > -1) {
            setLoading(false);
            setFilm(films[idx])
        }

    }, []);

    // if (loading) return <Spinner/>

    return (
        <main className="page container">
            <h1 className="hide">{film.title}</h1>

            <div className="film-details">
                <button type="button" className="back-link">
                    <span className="hide">Назад</span>
                </button>

                <div className="film-details__container">
                    <div className="film-details__image">
                        <img src="/src/images/TMP/picture3.jpg" alt=""/>
                    </div>

                    <div className="film-details__content">
                        <table>
                            <tbody>
                            <tr>
                                <td className="text-p1">Название:</td>
                                <td className="title-h3">Однажды в... Голливуде</td>
                            </tr>

                            <tr>
                                <td className="text-p1">Страна:</td>
                                <td className="text-p2">США, Германия</td>
                            </tr>

                            <tr>
                                <td className="text-p1">Жанр:</td>
                                <td className="text-p2">Комедия</td>
                            </tr>
                            </tbody>
                        </table>

                        <p className="film-details__description">
                            Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его
                            «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место
                            в стремительно меняющемся мире киноиндустрии.
                        </p>
                    </div>
                </div>
            </div>

            <div className="comments">
                <h2 className="title-h3 comments__title">Комментарии</h2>

                <div className="comments__container">
                    <form className="comments-form">
                        <label>
                        <textarea
                            name="new-comment"
                            className="comments-form__field"
                            id="new-comment"
                            placeholder="Введите комментарий..."
                        />
                        </label>

                        <button
                            type="submit"
                            className="btn btn--primary comments-form__btn"
                        >
                            Опубликовать
                        </button>
                    </form>

                    <ul className="comments-list">
                        <li className="comments-item">
                            <p className="title-h4 comments-item__username">Nickname</p>

                            <p className="text-p1 comments-item__text">
                                По моему ни на что не претендующему мнению, если человеку нужна особая причина,
                                чтобы посмотреть Тарантино, то тут одно из двух: либо совсем уж вкусы разнятся, либо
                                кинематограф, как явление человеку безразличен. Во всех остальных случаях имя
                                режиссера говорит само за себя — надо смотреть.
                            </p>

                            <button type="button" className="comments-item__delete delete">
                                <span className="hide">Удалить</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default withLayout(FilmDetails);