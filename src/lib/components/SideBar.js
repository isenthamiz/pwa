import React from 'react';
import './../../styles/SideBar.css';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            lists: ['Personal', 'Work', 'Grossary']
        };  
        this._onFormSubmit = this._onFormSubmit.bind(this);
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

    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-lists">
                    <div className="sidebar-lists-header">
                        <ul className="sidebar-lists-header-items">
                            <li className="sidebar-list-header-item"><i class="far fa-check-circle"></i></li>
                            <li id="sidebar-header-lists" className="sidebar-list-header-item">Lists</li>
                            <li className="sidebar-list-header-item"><i class="far fa-edit"></i></li>
                        </ul>
                    </div>
                    <div className="sidebar-items-container">
                    <ul className="sidebar-items">
                        <span><li className="sidebar-item">All Tasks</li></span>
                        {this.state.lists.map(item => <span><li className="sidebar-item">{item}</li></span>)}
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