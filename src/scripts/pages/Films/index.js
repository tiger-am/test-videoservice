import React, {useEffect} from "react";
import withLayout from "components/HOC/withLayout";
import Nav from "components/Nav";
import Spinner from "components/Spinner";
import {connect} from "react-redux";
import {fetchFilms} from "actions";
import {compose} from "utils";
import withService from "components/HOC/withService";
import {Link} from "react-router-dom";
import TinySlider from "tiny-slider-react";

function Films({fetchFilms, films, loading}) {

    // const {getFilms, loading, error, clearError} = useService();

    useEffect(() => {
        fetchFilms()
    }, [])

    useEffect(() => {

    })


    const settings = {
        // lazyload: true,
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
            768: {
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    };

    return (
        <main className="container">
            <Nav/>

            <div className="films">
                {loading ? <Spinner/> : (
                    <>
                        <h2 className="films__title">🔥 Новинки</h2>

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
            </div>
        </main>
    )
}

const mapStateToProps = ({films, loading}) => ({films, loading})

const mapDispatchToProps = (dispatch, {service}) => {
    return {
        fetchFilms: fetchFilms(service, dispatch)
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(withLayout(Films));

