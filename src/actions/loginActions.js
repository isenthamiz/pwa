export const userLogin = (data={}) => {
    return {
        type: 'LOGIN',
        data
    }
}

export const  userLogout = ()=> {
    return {
        type: 'LOGOUT'
    }
}