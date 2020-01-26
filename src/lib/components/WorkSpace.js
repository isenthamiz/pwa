import React from 'react';
import './../../styles/WorkSpace.css';
import SideBar from './SideBar';
import Todo from './Todo'

export default class WorkSpace extends React.Component {
    render() {
        return  (
            <div className="work-space-container">
                <div className="work-space-sidebar">
                    <SideBar />
                </div>
                <div className="work-space-contents">
                    <div className="work-space-contents-header">
                        <div>
                            <h3>Personal</h3>
                        </div>
                    </div>
                    <div className="work-space-contents-body">
                        <Todo />
                    </div>
                </div>
            </div>
        )
    }
}