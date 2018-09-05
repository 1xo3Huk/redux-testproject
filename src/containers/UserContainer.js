import React, { Component } from 'react'
import { connect } from 'react-redux'

import User from '../components/User'

import { handleLogin } from '../actions/UserActions'
import { handleLogout } from '../actions/UserActions'

class UserContainer extends Component {

    render() {

        const { user, handleLogin, handleLogout } = this.props

        return (

            <User
                name={user.name}
                error={user.error}
                isFetching={user.isFetching}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
            />

        )

    }

}

const mapStateToProps = store => {

    return {

        user: store.userReducer,
        
    }

}

const mapDispatchToProps = dispatch => {

    return {

        handleLogin: () => dispatch(handleLogin()),
        handleLogout: () => dispatch(handleLogout()),

    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)