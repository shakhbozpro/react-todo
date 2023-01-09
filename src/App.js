import { List } from "./components/List";
import { Item } from "./components/Item";
import { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const inputValue = useRef();
  
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  // FORM SUBMIT
  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const newObj = {
      id: todos.length ? todos.at(-1).id + 1 : 1,
      text: inputValue.current.value,
      isComplete: false,
    };

    setTodos([...todos, newObj]);
    inputValue.current.value = "";
    toast.success("Added todo");
  };

  const handleCompleteTodo = (todoId) => {
    const findedTodo = todos.find(item => item.id === todoId);
    findedTodo.isComplete = !findedTodo.isComplete;
    setTodos([...todos]);
    toast.info("Todo done");
  }

  const handleEditTodo = (todoId, todoText) => {
    const newTodoText = prompt("Add new todo", todoText);
    const findedTodo = todos.find(item => item.id === todoId);
    findedTodo.text = newTodoText;
    setTodos([...todos]);
    toast.success("Your todo edited");
  }

  const handleDeleteTodo = (todoId) => {
    const filteredTodos = todos.filter(item => item.id !== todoId);
    setTodos([...filteredTodos]);
    toast.error("Your todo deleted");
  }

  localStorage.setItem("todos", JSON.stringify(todos));
  
  return <div className="app">
    <h1 className="my-4 text-center display-1 text-uppercase">Todo app</h1>
    <div className="container">
      <div className="row">
        <div className="col-12 mx-auto p-4 shadow col-lg-6 p-md-5">
        <form onSubmit={handleFormSubmit} className="mb-3">
          <div className="input-group">
              <input 
              ref={inputValue} 
              className="form-control" 
              type="text" 
              placeholder="Todo..."
              required />
              <button className="btn btn-primary" type="submit">Add</button>
          </div>
        </form>

        {todos.length ? (<List>
          {
            todos.map((item) => (
              <Item 
              key={item.id} 
              {...item}
              handleCompleteTodo={handleCompleteTodo} 
              handleEditTodo={handleEditTodo}
              handleDeleteTodo={handleDeleteTodo}/>
              ))
          }
        </List>) : (
          <h2 className="mt-4 mb-0 text-center">Hali todolar yo'q</h2>
        )}
        </div>
      </div>
    </div>
    <ToastContainer 
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"/>
  </div>
};