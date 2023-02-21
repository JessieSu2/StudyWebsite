import React from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ToDo(){
    const [todos, setTodos] = React.useState([
        {
          text: "This is a sampe todo",
          isDone: false
        }
      ]);

      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
};
    return(
        <h1>To Do</h1>
    );
}


export default ToDo;