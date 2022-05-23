import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import EditProfile from "./components/EditProfile";
import CreateInternship from "./components/CreateInternship";
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
          <div className="app__container">
            <Navigation handleLogout={handleLogout} />
            <div className="app__content">
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
                <Route
                  path="/profile/edit"
                  element={
                    <EditProfile
                      user={user}
                      profile={profile}
                      setProfile={setProfile}
                    />
                  }
                />
                <Route
                  path="/internship/create"
                  element={<CreateInternship />}
                />
              </Routes>
            </div>
          </div>
        )}
      </BrowserRouter>
      <footer className="app__footer"></footer>
    </div>
  );
};

export default App;
