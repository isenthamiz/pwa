import React from 'react';
import { connect } from 'react-redux';

import {addItem} from './../../actions/tasksAction';
import './../../styles/Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this._formSubmit = this._formSubmit.bind(this);
    }

    _formSubmit(e) {
        e.preventDefault();
        let data={}
        data.item = e.target.elements.additem.value;
        this.props.dispatch(addItem(data));
        e.target.elements.additem.value = '';
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-lists">
                    <div className="todo-list-itmes">
                        {this.props.activeItems.map(function (item) {
                            return <div key={item} className="todo-list-item">
                                <div className="container">
                                    <input value={item} type="checkbox" />
                                    <span className="checkmark" />
                                </div>
                                <label>{item}</label>
                            </div>
                        })}
                    </div>

                    <form className="todo-add-details" onSubmit={this._formSubmit}>
                        <input id="additem" type="text"></input>
                        <button><i className="fas fa-arrow-up"></i></button>
                    </form>

                </div>
                <div className="todo-details">
                    <div className="todo-details-header">
                        <h3>Task Activity</h3>
                    </div>
                    <div>

                    </div>

                </div>
                <div className="anniversary-lists">
                    <div className="anniversary-lists-header">
                        <h3>Birthday & Anniversary</h3>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeItems: state.TasksReducer.activeItems
    }
}

export default connect(mapStateToProps)(Todo)