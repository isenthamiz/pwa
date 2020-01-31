const tasksDefaultState = {
    activeTask: 'All Tasks',
    activeItems: {},
    activeItemDetails: {},
    anniversaryObj:{},
    tasks: {}
}

const TasksReducer = (state=tasksDefaultState, action) => {
    switch(action.type) {
        case 'SET_ACTIVE': 
            return {
                activeTask: action.data.activeTask
            }
        default:
            return state
    }
}

export default TasksReducer;