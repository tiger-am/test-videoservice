import React, {useCallback, useEffect} from "react";
import withLayout from "components/HOC/withLayout";
import Nav from "components/Nav";
import Spinner from "components/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "actions/films";
import {compose} from "utils";
import {Link} from "react-router-dom";
import TinySlider from "tiny-slider-react";
import useService from "hooks/useService";

const settings = {
    nav: false,
    mouseDrag: true,
    controls: false,
    gutter: 20,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    navPosition: 'bottom',
    autoplayButtonOutput: false,
    loop: false,
    responsive: {
        615: {
            items: 2,
        },
        870: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
};

const genre = [
    {
        icon: '😁',
        title: 'Комедии',
        color: 'orange'
    }, {
        icon: '😭',
        title: 'Драмы',
        color: 'red'
    }, {
        icon: '👽',
        title: 'Фантастика',
        color: 'blue'
    }, {
        icon: '👻',
        title: 'Ужасы',
        color: 'gray'
    },
]

function Films() {
    const {loading, getFilms: loadFilms} = useService();
    const dispatch = useDispatch();
    const films = useSelector(({films}) => films.films)

    const getFilms = useCallback(() => {
        dispatch(fetchFilms(loadFilms));
    }, [dispatch, fetchFilms, loadFilms])

    useEffect(() => {
        getFilms()

        console.log(loading); //eslint-disable-line
    }, [])

    return (
        <main className="container page">
            <Nav/>

            <section className="films">
                {loading ? <Spinner/> : (
                    <>
                        <h2 className="title-h2">🔥 Новинки</h2>

                        <div className="film-list">
                            <TinySlider settings={settings}>
                                {films.map(({id, title, image, description}) => (
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
                            </TinySlider>
                        </div>
                    </>
                )}
            </section>

            <section className="genre">
                <h2 className="title-h2">Жанры</h2>
                <div className="genre-list">

                    <TinySlider settings={settings}>
                        {genre.map(({icon, title, color}) => (
                            <div key={title} className={`genre-item`}>
                                <div className={`genre-item__card gradient--${color}`}>
                                    <h3 className="genre-item__title">{title}</h3>
                                    <span className="genre-item__icon">{icon}</span>
                                </div>
                            </div>
                        ))}
                    </TinySlider>
                </div>
            </section>
        </main>
    )
}

export default compose(
    withLayout
)(Films);

