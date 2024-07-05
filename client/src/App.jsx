import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import {
  Auth,
  Login,
  Singup,
  Dashboard,
  PuttingSession,
  Nav,
  Header,
  Footer,
} from "./index";

function App() {
  const [sessionToken, setSessionToken] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("MyToken")) {
      setSessionToken(localStorage.getItem("MyToken"));
    }
  }, []);

  // Sets the Token for the user session in the localstorage of the website.
  const updateToken = (token) => {
    console.log("Token Updated", token);

    localStorage.setItem("MyToken", token);

    setSessionToken(token);
  };

  // Clears the Token in the local storage so a new user can sign on.
  const clearToken = () => {
    console.log("Token Cleared");
    localStorage.clear();
    setSessionToken("");
    navigate("/");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      {/* {!sessionToken && (
        <>
        <div>
        <Header><Header/>
        </div>
          <div>
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route
                path="/home"
                element={<Auth updateToken={updateToken} />}
              />
            </Routes>
          </div>
        </>
      )}
      {sessionToken && (
        <>
          <div>
            <Nav clearToken={clearToken} />
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </>
      )} */}
      <div className="header">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/putting-session" element={<PuttingSession />} />
      </Routes>
      <div className="nav">
        <Nav></Nav>
      </div>
    </>
  );
}

export default App;
