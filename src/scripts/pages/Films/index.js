import React, { useCallback, useEffect } from "react";
import withLayout from "components/HOC/withLayout";
import Nav from "components/Nav";
import Spinner from "components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms, fetchGenres } from "actions/films";
import { compose } from "utils/compose";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useService from "hooks/useService";
import { settings } from "utils/settingsSlider";

function Films() {
    const { loading, getFilms: loadFilms, getGenres: loadGenres } = useService();
    const dispatch = useDispatch();
    const films = useSelector(({ films }) => films.films);
    const genres = useSelector(({ films }) => films.genres);
    const filter = useSelector(({ search }) => search.filter);

    const getFilms = useCallback(() => {
        dispatch(fetchFilms(loadFilms));
    }, [ dispatch, fetchFilms, loadFilms ]);

    const getGenres = useCallback(() => {
        dispatch(fetchGenres(loadGenres));
    }, [ dispatch, fetchFilms, loadGenres ]);

    useEffect(() => {
        if (!films.length) {
            getFilms();
        }

        if (!genres.length) {
            getGenres();
        }
    }, []);

    const renderFilms = () => {
        const filmsList = filter
            ? films.filter(film => film.title.toLowerCase().indexOf(filter.toLowerCase()) > -1)
            : films;

        return (
            <Slider {...settings}>
                {filmsList.map(({ id, title, image, description }) => (
                    <div key={id} className="film-item">
                        <div
                            className="film-item__card"
                        >
                            <Link
                                to={`/films/${id}`}
                            >
                                <img src={image} alt={title}/>

                                <div className="film-item__description">
                                    {description}
                                </div>
                            </Link>
                        </div>

                        <h3 className="film-item__title">{title}</h3>
                    </div>
                ))}
            </Slider>
        );

    };

    const renderGenres = () => {
        return (
            <Slider {...settings}>
                {genres.map(({ icon, title, color }) => (
                    <div key={title} className={`genres-item`}>
                        <div className={`genres-item__card gradient--${color}`}>
                            <h3 className="genres-item__title">{title}</h3>
                            <span className="genres-item__icon">{icon}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    };

    return (
        <main className="container page">
            <Nav/>

            <section className="films">
                {loading ? <Spinner/> : (
                    <>
                        <h2 className="title-h2">🔥 Новинки</h2>

                        <div className="film-list">
                            {!!films.length && renderFilms()}
                        </div>
                    </>
                )}
            </section>

            {!!genres.length && (
                <section className="genres">

                    <h2 className="title-h2">Жанры</h2>

                    <div className="genres-list">
                        {!!genres.length && renderGenres()}
                    </div>
                </section>
            )}
        </main>
    );
}

export default compose(
    withLayout
)(Films);

