import React,{useEffect} from "react";
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import FormTodo from './components/FormTodo'
import Todo from './components/Todo'
import axios from "axios";

function App() {
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

  // const allPermissions = async() => {
  //   try {
  //     const data = await axios.get(`http://localhost:5000/api/v1/permission/`);
  //     let {permission} = data.data
  //     console.log(permission)
  //   }
  //   catch(e) {
  //     console.log(e);
  //   }
  // }
  // useEffect(() => {
  //   allPermissions()
  // }, [])

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
