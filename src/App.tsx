import React, { useState } from "react";
import { ToDoList } from "./Components/ToDoList";
import { ToDo } from "./Utilities/types";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<ToDo[]>([
    { index: 1, title: "Test 1", completed: false, dateCreated: new Date() },
    { index: 2, title: "Test 2", completed: true, dateCreated: new Date() },
    { index: 3, title: "Test 3", completed: false, dateCreated: new Date() },
    { index: 4, title: "Test 4", completed: true, dateCreated: new Date() },
    { index: 5, title: "Test 5", completed: false, dateCreated: new Date() },
    { index: 6, title: "Test 6", completed: true, dateCreated: new Date() },
  ]);

  const addToDo = (newTitle: string) => {
    const newToDo: ToDo = {
      index: todos.length + 1,
      title: newTitle,
      completed: false,
      dateCreated: new Date(),
    };
    setTodos([...todos, newToDo]);
  };

  const deleteToDo = (index: number) => {
    setTodos(todos.filter((x) => x.index !== index));
  };

  const completeToDo = (index: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.index === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="page-container">
      <ToDoList
        todos={todos}
        addToDo={addToDo} //TODO: Move to AddToDo component
        deleteToDo={deleteToDo}
        completeToDo={completeToDo}
      />
    </div>
  );
}

export default App;
