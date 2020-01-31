import React from 'react';
import {connect} from 'react-redux';

import {setActive} from './../../actions/tasksAction';
import './../../styles/SideBar.css';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            lists: ['All Tasks', 'Personal', 'Work', 'Grossary'],
            itemIndex: -1,
            activeItem: 'All Tasks'
        };  
        this._onFormSubmit = this._onFormSubmit.bind(this);
        this._selectTask = this._selectTask.bind(this);
    }

    _onFormSubmit(e){
        e.preventDefault();
        let entry = e.target.elements.entry.value;
        this.setState((state)=>{
            return {
                lists: [...state.lists, entry]
            }
        })
        e.target.elements.entry.value = '';
    }

    _selectTask(index,item) {
        let data = {}
        data.activeTask = item;
        this.props.dispatch(setActive(data));
        this.setState((state)=> {
            return  {
                itemIndex:  index
            }
        })
    }

    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-lists">
                    <div className="sidebar-lists-header">
                        <ul className="sidebar-lists-header-items">
                            <li className="sidebar-list-header-item"><i className="far fa-check-circle"></i></li>
                            <li id="sidebar-header-lists" className="sidebar-list-header-item">Lists</li>
                            <li className="sidebar-list-header-item"><i className="far fa-edit"></i></li>
                        </ul>
                    </div>
                    <div className="sidebar-items-container">
                    <ul className="sidebar-items">
                        {this.state.lists.map((item,index) => <span key={item} className={this.state.itemIndex === index ? "active" : null} onClick={this._selectTask.bind(this,index,item)}><li className="sidebar-item">{item}</li></span>)}
                    </ul>
                    </div>
                    <div>
                    <form onSubmit={this._onFormSubmit}>
                        <input id="entry" type='text' placeholder="+ New List"></input>
                    </form>
                    </div>
                </div>
                <div className="sidebar-footer">
                    <span><p>hurly-burly Beta, v1.0.0</p></span>
                </div>
            </div>
        )
    }
}

export default connect()(SideBar)