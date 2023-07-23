import "./css/App.css";
import { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import Todo from "./components/Todo";
import { firestore } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  collectionGroup,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // ComponentDidMount
  useEffect(() => {
    getDocs(collectionGroup(firestore, "todos"))
      .then((res) => {
        setTodos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => {});
  }, []);

  const handleSubmit = async (event) => {
    //this will fire off when we click the button
    event.preventDefault(); // will stop the REFRESH!

    const todo = {
      title: input,
    };

    await addDoc(collection(firestore, "todos"), todo);

    setTodos([todo, ...todos]);
    setInput(""); // clear up the input after clicking add todo button
  };

  const handleDeleteTodo = async (todo) => {
    try {
      await deleteDoc(doc(firestore, "todos", todo.id));
      const newTodos = [...todos];
      const index = newTodos.findIndex((t) => t.id === todo.id);
      if (index >= 0) {
        newTodos.splice(index, 1);
        setTodos(newTodos);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="App">
      <h1> Hello Celevr Programmers 🚀 ! </h1>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>✔️:Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={todo + index}
            todo={todo}
            onDelete={() => handleDeleteTodo(todo)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
