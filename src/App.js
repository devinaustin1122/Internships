import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import EditProfile from "./components/EditProfile";
import "./App.css";

const App = () => {
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
            <div className="pb-4">
              <Navigation setUser={setUser} />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile/edit" element={<EditProfile />} />
              </Routes>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
