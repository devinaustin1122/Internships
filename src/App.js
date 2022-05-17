import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import EditProfile from "./components/EditProfile";
import "./App.css";

const dummy = {
  id: "db3995d64344242e877f9f24f320c099a858868e",
  name: "Devin Dyer",
  organization: "Longwood University",
  title: "Internship Coordinator",
};

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
          <div className="app__container">
            <Navigation setUser={setUser} />
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/profile/edit"
                element={<EditProfile user={dummy} />}
              />
            </Routes>
          </div>
        )}
      </BrowserRouter>
      <footer className="app__footer"></footer>
    </div>
  );
};

export default App;
