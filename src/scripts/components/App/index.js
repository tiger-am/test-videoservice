import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Films from "pages/Films";
import Channels from "pages/Channels";
import FilmDetails from "pages/FilmDetails";
import { useStorage } from "hooks/useStorage";
import { commentsLoaded, filmsLoaded, genresLoaded } from "actions/films";
import { setUser } from "actions/user";
import { channelsLoaded } from "actions/channels";
import { useDispatch } from "react-redux";

export default function App() {
    const { getData } = useStorage();
    const dispatch = useDispatch();

    useEffect(() => {
        const films = getData('films');
        const user = getData('user');
        const channels = getData('channels');
        const genres = getData('genres');
        const comments = getData('comments');

        if (user) {
            dispatch(setUser(user));
        }
        if (films) {
            dispatch(filmsLoaded(films));
        }
        if (comments) {
            dispatch(commentsLoaded(comments));
        }
        if (channels) {
            dispatch(channelsLoaded(channels));
        }
        if (genres) {
            dispatch(genresLoaded(genres));
        }
    }, []);

    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/films"/>
            </Route>

            <Route path="/films/:id" component={FilmDetails}/>
            <Route path="/films" component={Films}/>
            <Route path="/channels" component={Channels}/>
        </Switch>
    );
}