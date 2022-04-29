import { BrowserRouter } from "react-router-dom";
import Login from "./containers/Login";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
