import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default class User extends Component {

    renderTemplate = () => {        

        const { name, error, isFetching } = this.props

        if (error) {

            return <p>Во время авторизации произошла ошибка, обновите страницу</p>

        }

        if (isFetching) {

            return <p>Авторизация...</p>

        }

        if (name) {

            return (

                <div>
                    <p>Привет, {name}!</p>
                    <button ref={ button => this.btn = button } className="btn" onClick={this.props.handleLogout}>
                        Выйти
                    </button>
                </div>

            )

        } else {

            return (

                <button className="btn" onClick={this.props.handleLogin}>
                    Войти
                </button>

            )

        }

    }

    render() { 
        
        return <div className="ib user">{this.renderTemplate()}</div>

    }
}

User.propTypes = {

    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,

}
