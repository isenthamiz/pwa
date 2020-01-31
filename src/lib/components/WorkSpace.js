import React from 'react';
import {connect} from 'react-redux';
import './../../styles/WorkSpace.css';
import SideBar from './SideBar';
import Todo from './Todo'

class WorkSpace extends React.Component {
    render() {
        return  (
            <div className="work-space-container">
                <div className="work-space-sidebar">
                    <SideBar />
                </div>
                <div className="work-space-contents">
                    <div className="work-space-contents-header">
                        <div id="work-space-header-title">
                            <h3>{this.props.activeTask}</h3>
                        </div>
                        <div className="work-space-header-options">
                            <a className="workspace-header-option"><i className="fas fa-share-square"></i></a>
                            <a className="workspace-header-option"><i className="fas fa-eye"></i></a>
                            <a className="workspace-header-option"><i className="fas fa-ellipsis-h"></i></a>
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

function mapStateToProps(state) {
    return {
        activeTask: state.TasksReducer.activeTask
    }
}

export default connect(mapStateToProps)(WorkSpace)