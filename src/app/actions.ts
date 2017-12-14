export const addTodo = (todoText) => {
    var todo = {
        text: todoText,
        completed: false
    };
    return {
        type: 'ADD_TODO',
        payload: todo
    };
};

export const removeTodo = (index) => {
    return {
        type: 'REMOVE_TODO',
        payload: index
    };
};

export const setTodoAsCompleted = (index) => {
    return {
        type: 'SET_TODO_COMPLETED',
        payload: index
    };
};

export const setPriorityTodo = (item) => {
    return {
        type: 'SET_PRIORITY_TODO',
        payload: item
    };
};