import React from 'react';
import './../../styles/WorkSpace.css';
import SideBar from './SideBar';

export default class WorkSpace extends React.Component {
    render() {
        return  (
            <div className="work-space-container">
                <div className="work-space-sidebar">
                    <SideBar />
                </div>
                <div className="work-space-contents">

                </div>
            </div>
        )
    }
}