import React from 'react';
import  './../../styles/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div className="main-options">
                    <ul className="main-options-items">
                        <li className="main-options-item"><i className="fas fa-bars"></i></li>
                        <div id="add-button"><a href="#"><i className="fas fa-plus"></i> Add</a></div>
                    </ul>
                </div>
                <div  className="main-logo">
                    
                </div>
                <div className="main-nav">
                    <ul className="main-nav-items">
                        <li className="main-nav-item"><i className="fas fa-cog"></i></li>
                        <li className="main-nav-item"><i className="fas fa-sync"></i></li>
                        <li className="main-nav-item"><i className="fas fa-bell"></i></li>
                        <li className="main-nav-item"><i className="fas fa-user-circle"></i></li>
                    </ul>
                </div>
            </header>
        )
    }
}