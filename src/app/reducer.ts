const initialState = {
    list: [],
    priorityItem: null
};

function todosReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                list: [...state.list.slice(0,action.payload),...state.list.slice(action.payload+1,state.list.length)]
            }
        case 'SET_TODO_COMPLETED':
            return {
                ...state,
                list: state.list.map((item, index) => {
                    if(index === action.payload){
                        return {
                            ...item,
                            completed: true
                        };
                    }
                    return item;
                })
            };
        case 'SET_PRIORITY_TODO':
            return {
                ...state,
                priorityItem: action.payload
            };
        
    }
    return state;
}


export const appReducer = {
    todo: todosReducer
};