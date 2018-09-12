import React, { Component } from 'react';
class ErrorBoundary extends Component {
    state = {
        hasError: null,
        errorMessage: 'Something went wrong'
    }

    componentDidCatch(error, message) {
        this.setState({
            hasError: true,
            errorMessage: message
        })
    }

    render() {
        if (this.state.hasError) { 
            return <h3>{this.state.errorMessage}</h3>
         } else {
             return this.props.children;
         }
    }
}


export default ErrorBoundary;