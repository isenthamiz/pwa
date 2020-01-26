const loginDefaultState = {
    id: undefined,
    name: undefined,
    username: undefined,
    isLoggedIn: false,
    token: undefined
}

const LoginReducer = (state=loginDefaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                id: action.data.id,
                name: action.data.name,
                username: action.data.username,
                isLoggedIn: true,
                token: action.data.token
            }
        case 'LOGOUT':
            return {
                id: undefined,
                name: undefined,
                username:  undefined,
                isLoggedIn: false,
                token: undefined
            }
        default:
            return state
    }
}

export default LoginReducer;