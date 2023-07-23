import { Button, ListItem, ListItemText } from "@mui/material";
import "../css/Todo.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Todo({ todo, onDelete }) {
  return (
    <ListItem className="todo-list-item">
      <ListItemText primary={todo.title} secondary="Dummy deadline ⏰" />
      <Button variant="contained" color="secondary" onClick={onDelete}>
        <DeleteForeverIcon fontSize="small" style={{ marginRight: 3 }} />
      </Button>
    </ListItem>
  );
}

export default Todo;
