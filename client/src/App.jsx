import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { Auth, Dashboard, PuttingSession, Nav } from "./index";

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
    if (token) {
        localStorage.setItem("MyToken", token);
        setSessionToken(token);
    } else {
        console.error("Token is undefined");
    }
};;

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
      {!sessionToken && (
        <>
          <div>
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route
                path="/home"
                element={<Auth updateToken={updateToken} />}
              />
            </Routes>
            <Auth updateToken={updateToken}/>
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
            <Route path="/putting-session" element={<PuttingSession />} />
          </Routes>
        </>
      )}
      {/* <div>
        <Nav></Nav>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/putting-session" element={<PuttingSession />} />
      </Routes> */}
    </>
  );
}

export default App;
