import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Navigation from "./containers/Navigation";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    token: window.localStorage.getItem("token"),
  });

  useEffect(() => {
    window.localStorage.setItem("token", user.token);
  }, [user.token]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user.token && <Login setUser={setUser} />}
        {user.token && (
          <div className="container-flex-col">
            <Navigation setUser={setUser} />
            <Dashboard />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
