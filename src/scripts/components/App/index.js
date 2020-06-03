import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import Films from "pages/Films";
import Channels from "pages/Channels";
import FilmDetails from "pages/FilmDetails";


export default function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/films"/>
            </Route>

            <Route path="/films/:id" component={FilmDetails}/>
            <Route path="/films" component={Films}/>
            <Route path="/channels" component={Channels}/>
        </Switch>
    )
}