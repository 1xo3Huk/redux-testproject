import React, { Component } from 'react';

import UserContainer from '../../containers/UserContainer'
import PageContainer from '../../containers/PageContainer'

import './style.css';

export default class App extends Component {
    
    render() {
        
        return (

            <div className="app">
                <PageContainer />
                <UserContainer />
            </div>

        )

    }

}
