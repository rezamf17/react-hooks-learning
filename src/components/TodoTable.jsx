import React from 'react'
import {
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

function TodoTable(props) {
    const doCompleted = (todoId) => {
        props.completedTodos(todoId)
    }
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Todo Name</TableCell>
                        <TableCell>Todo Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.propsTodos.map((todo) => {
                        return <tr key={todo.id}>
                            <TableCell>{todo.id}</TableCell>
                            <TableCell>{todo.name}</TableCell>
                            <TableCell>{todo.isCompleted ? "Selesai" : "Belum Selesai"}</TableCell>
                            <TableCell>{todo.isCompleted ? "" :
                             <Button variant='outlined'
                              color='success'
                              endIcon={<DoneOutlinedIcon/>} 
                              onClick={() => doCompleted(todo.id)}>Selesaikan</Button>}
                            </TableCell>
                        </tr>
                    })}
                </TableBody>
            </Table>
        </>
    );
}

export default TodoTable;