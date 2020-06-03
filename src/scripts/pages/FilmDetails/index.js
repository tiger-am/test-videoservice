import React, {useEffect, useState} from "react";
import withLayout from "components/HOC/withLayout";
import {useStore} from "react-redux";
import Spinner from "components/Spinner";

function FilmDetails({match}) {
    const store = useStore()
    const id = +match.params.id
    const {films} = store.getState();
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

    if (loading) return <Spinner/>

    return (
        <main className="container">
            {JSON.stringify(film)}
        </main>
    )
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch, state) => {

}


export default withLayout(FilmDetails);