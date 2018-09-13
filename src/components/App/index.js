import React, { Component } from 'react';

import UserContainer from '../../containers/UserContainer'
import PageContainer from '../../containers/PageContainer'

import './style.css';

export default class App extends Component {
    
    state = {

        logoutIsComplete: true,
    }

    changeLogoutState = () => {

        this.setState({

            logoutIsComplete: !this.state.logoutIsComplete
        })
    }

    render() {
        
        return (

            <div className="app">
                <PageContainer isLogout={this.state.logoutIsComplete} />
                <UserContainer handle={this.changeLogoutState} />
            </div>
        )
    }
}
