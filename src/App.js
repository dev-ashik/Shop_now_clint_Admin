import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import "./App.css";

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="others">others</div>
      </div>
    </div>
  );
}

export default App;
