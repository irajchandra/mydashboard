import "./App.css";
import Sidebar from "./component/sidebar/sidebar";
import Displayer from "./component/diplayer/displayer";

function App() {
  return (
    <div className="App">
      <div className="dashboard">
          <Sidebar/>    
          <Displayer/>                
      </div>
    </div> 
    
  );
}

export default App;
