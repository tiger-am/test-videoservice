import React from "react";

import ErrorIndicator from "../ErrorIndicator";

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: ''
    }

    componentDidCatch(error) {
        this.setState({
            hasError: true,
            error
        })
    }

    render() {
        return this.state.hasError ? <ErrorIndicator error={this.state.error}/> : this.props.children
    }
}