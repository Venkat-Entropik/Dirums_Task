import AppBarComp from "./Components/NavComponent/AppBar";
import TaskContainer from "./Components/TaskContainer/TaskContainer";
import CreateContext from "./Components/context/CreateContext";
import LogoContainer from "./Components/logoContainer/LogoContainer";
import CreateModal from "./Components/modal/CreateModal";
import EditModal from "./Components/modal/EditModal";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="App">
      <CreateContext>
        <AppBarComp />
        <LogoContainer />
        <TaskContainer />
        <CreateModal />
        <EditModal />
      </CreateContext>
    </div>
  );
}
