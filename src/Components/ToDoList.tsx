import { ToDo } from "../Utilities/types";
import "./ToDoList.css";

interface Props {
  todos: ToDo[] | undefined;
  deleteToDo: (index: number) => void;
  completeToDo: (index: number) => void;
  addToDo: (title: string) => void;
}

export const ToDoList = ({
  todos,
  deleteToDo,
  completeToDo,
  addToDo,
}: Props) => {
  return (
    <>
      <div>
        <h1>ToDolist</h1>
      </div>
      <div>
        <button onClick={() => addToDo("Add function test")}>Add test</button>
        {todos?.map((x) => (
          <div>
            <div
              style={{ textDecoration: x.completed ? "line-through" : "none" }}
            >{`${x.title}`}</div>
            <div>{`${x.dateCreated.toDateString()}`}</div>
            <button>Edit</button>
            <button onClick={() => deleteToDo(x.index)}>Delete</button>
            <button onClick={() => completeToDo(x.index)}>Complete</button>
          </div>
        ))}
      </div>
    </>
  );
};
