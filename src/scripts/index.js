import React from 'react'
import {Provider} from "react-redux";
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import App from 'components/App'
import ErrorBoundary from "components/ErrorBoundary";
import store from './redux/store'


const Application = () => {

    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Router>
                    <App/>
                </Router>
            </ErrorBoundary>
        </Provider>
    )
}

render(<Application/>, document.getElementById('root'));