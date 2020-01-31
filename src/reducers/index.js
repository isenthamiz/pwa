import {combineReducers} from 'redux';
import LoginReducer from './loginReducer';
import TasksReducer from './tasksReducer';

export default combineReducers({
    LoginReducer,
    TasksReducer
})