import React, {useState, useEffect} from 'react'
import TodoForm from '../components/TodoForm';
import TodoTable from '../components/TodoTable';

function Todo() {
    const [todos, setTodos] = useState([
        {
            id : 1,
            name : "Membuat anak",
            isCompleted : false
        },
        {
            id : 2,
            name : "Membuat indomie",
            isCompleted : false
        },
        {
            id : 3,
            name : "Membuat aplikasi react native",
            isCompleted : false
        },
        {
            id : 4,
            name : "poop",
            isCompleted : true
        },
    ])

    const [count, setCount] = useState(0)

    const addTodo = (todoNewName) => {
        const newId = todos[todos.length - 1].id + 1;
        const newTodoObject = {
            id : newId,
            name : todoNewName,
            isCompleted : false
        }
        const newTodos = [...todos, newTodoObject]
        setTodos(newTodos)
    }

    const completedTodos = (newId) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === newId) {
                todo.isCompleted = true
            }
            return todo;
        })
        setTodos(newTodos)
    }

    useEffect(
        () => {
            const tes = ('Todos' + todos.length)
            console.log(tes)
            document.title = tes
        },
        [todos]
    )
    useEffect(
        () => {
            const tes = ('Todos' + todos.length)
            console.log(tes)
           document.p = tes
        }
    )
    return (  
        <>
        <h2>Aplikasi Todo List</h2>
        <p>-</p>
        <TodoForm addTodo={addTodo} />
        <TodoTable propsTodos={todos} completedTodos={completedTodos}/>
        </>
    );
}

export default Todo;