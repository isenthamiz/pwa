export const setActive = (data={}) =>  {
    return {
        type: 'SET_ACTIVE',
        data
    }
}

export const addItem = (data={}) => {
    return {
        type: 'ADD_ITEM',
        data
    }
}