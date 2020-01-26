import {createStore} from 'redux';

import LoginReducer from './../reducers/loginReducer';

export default () => {
    return createStore(LoginReducer)
}