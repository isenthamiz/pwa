import React from 'react';

import './../../styles/Todo.css';

export default class Todo extends React.Component {
    render() {
        return (
            <div className="todo-container">
                <div className="todo-lists">
                    <div>

                    </div>
                    
                    <form className="todo-add-details">
                        <input type="text"></input>
                        <button><i class="fas fa-arrow-up"></i></button>
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