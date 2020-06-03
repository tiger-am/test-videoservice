import React from 'react'
import {Provider} from "react-redux";
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import App from 'components/App'
import ErrorBoundary from "components/ErrorBoundary";
import {ServiceProvider} from 'components/ServiceContext'
import store from './store'
import useService from "services/index";


const Application = () => {
    const service = useService();

    return (
        <Provider store={store}>
            <ErrorBoundary>
                <ServiceProvider value={service}>
                    <Router>
                        <App/>
                    </Router>
                </ServiceProvider>
            </ErrorBoundary>
        </Provider>
    )
}

render(<Application/>, document.getElementById('root'));