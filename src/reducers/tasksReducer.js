const tasksDefaultState = {
    activeTask: 'All Tasks',
    activeItems: ['Task1', 'Task 2', 'Task 3','Task 4'],
    activeItemDetails: {},
    anniversaryObj:{},
    tasks: {}
}

const TasksReducer = (state=tasksDefaultState, action) => {
    switch(action.type) {
        case 'SET_ACTIVE': 
            return {
                ...state,
                activeTask: action.data.activeTask
            }
        case 'ADD_ITEM':
            return {
                ...tasksDefaultState,
                activeItems:[...state.activeItems, action.data.item]
            }
        default:
            return state
    }
}

export default TasksReducer;