import React from 'react';
import './../../styles/Dashboard.css';
import Header from './Header';
import WorkSpace from './WorkSpace';

export default class Dashborad extends React.Component {
    render() {
        return (
            <div className="dashboard-main-container">
                <Header />
                <WorkSpace />
            </div>
        )
    }
}