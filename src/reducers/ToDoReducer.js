export default function ToDoReducer(todos, action){
    switch (action.type) {
        case 'tambah':
            const newId = todos[todos.length - 1].id + 1;
            const newTodoObject = {
                id: newId,
                name: action.name,
                isCompleted: false
            }
            const newTodos = [...todos, newTodoObject]
            return newTodos
        case 'selesaikan':
            const todoBaru = todos.map((todo) => {
                if (todo.id === action.id) {
                    todo.isCompleted = true
                }
                return todo;
            })
            return todoBaru
    }
}