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
    ...window.localStorage,
  });

  useEffect(() => {
    window.localStorage.setItem("token", user.token);
    console.log(user);
  }, [user.token]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user.token && <Login setUser={setUser} />}
        {user.token && (
          <div className="app__container">
            <Navigation setUser={setUser} />
            <Routes>
              <Route path="/profile" element={<Profile user={user} />} />
              <Route
                path="/profile/edit"
                element={<EditProfile user={user} />}
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
