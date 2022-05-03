import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./containers/Login";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="app">
      <BrowserRouter>{!user && <Login setUser={setUser} />}</BrowserRouter>
    </div>
  );
}

export default App;
