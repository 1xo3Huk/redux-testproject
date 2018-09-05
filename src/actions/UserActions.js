export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function handleLogin() {
    return function(dispatch) {
        dispatch({
            type: LOGIN_REQUEST,
        })

        //eslint-disable-next-line no-undef
        VK.Auth.login(r => {
            if (r.session) {
                let username = r.session.user.first_name

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: username,
                })
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации'),
                })
            }
        }, 6)
    }
}

export function handleLogout() {
    return function(dispatch) {
        dispatch({
            type: LOGOUT_REQUEST,
        })

        //eslint-disable-next-line no-undef
        VK.Auth.logout( r => {
            let logoutInfo = `session: ${r.session}, status: ${r.status}, settings: ${r.settings}`
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: logoutInfo,
            })            
        })
    }
}