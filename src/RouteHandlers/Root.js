import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

class Root extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', this.props)
        return (
            <Provider store = {store}>
                <div>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Root