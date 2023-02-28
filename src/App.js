import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import EditTask from "./components/EditTask/EditTask";
import TaskList from "./components/TaskList/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
