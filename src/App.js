import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Navigation from "./components/common/Navigation";
import circle from "./images/circle.svg";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user")) || {}
  );

  const [profile, setProfile] = useState(
    JSON.parse(window.localStorage.getItem("profile")) || {}
  );

  const [internships, setInternships] = useState([]);

  const handleLogout = () => {
    setUser({});
    setProfile({});
  };

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
    window.localStorage.setItem("profile", JSON.stringify(profile));
  }, [user, profile]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user.token && <Login setUser={setUser} />}
        {user.token && (
          <>
            <Navigation handleLogout={handleLogout} />
            <Routes>
              <Route
                path="/profile"
                element={
                  <Profile
                    user={user}
                    profile={profile}
                    internships={internships}
                  />
                }
              />
            </Routes>
          </>
        )}
      </BrowserRouter>
      <footer className="app__footer"></footer>
    </div>
  );
};

export default App;
