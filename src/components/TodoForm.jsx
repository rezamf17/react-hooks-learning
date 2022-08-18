import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

function TodoForm(props) {
    const [inputData, setInputData] = useState("")
    const onChangeHandler = (event) => {
        setInputData(event.target.value)
    }
    const formSubmitHandler = (event) => {
        event.preventDefault()
        props.addTodo(inputData)
        setInputData("")
    }
    return (  
        <div>
            <form action="" onSubmit={formSubmitHandler}>
            <label htmlFor="todo">Input Your Todo</label>
            {/* <input type="text" name='todo-text' id='id-todo' value={inputData} onChange={onChangeHandler}/> */}
            <TextField 
                id="outlined-basic" 
                variant="outlined" 
                size="small" 
                value={inputData} 
                onChange={onChangeHandler}
                style={{ margin : '0em 1em 0em 1em'}}/>
            <Button type="submit" variant="contained" endIcon={<AddIcon />}>Add Todos</Button>
            </form>
        </div>
    );
}

export default TodoForm;