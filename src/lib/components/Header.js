import React from 'react';
import  './../../styles/Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div className="main-options">
                    <ul className="main-options-items">
                        <li className="main-options-item"><i class="fas fa-bars"></i></li>
                        <div id="add-button"><a href="#"><i class="fas fa-plus"></i> Add</a></div>
                    </ul>
                </div>
                <div  className="main-logo">
                    
                </div>
                <div className="main-nav">
                    <ul className="main-nav-items">
                        <li className="main-nav-item"><i class="fas fa-cog"></i></li>
                        <ii className="main-nav-item"><i class="fas fa-sync"></i></ii>
                        <li className="main-nav-item"><i class="fas fa-bell"></i></li>
                        <li className="main-nav-item"><i class="fas fa-user-circle"></i></li>
                    </ul>
                </div>
            </header>
        )
    }
}