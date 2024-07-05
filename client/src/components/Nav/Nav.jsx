import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  let location = useLocation();
  console.log(location);
  let backgroundColor = "#569AA6";

  return (
    <div className="nav" style={{ width: "15em" }}>
      <img className="nav-image" style={{ height: "8em", left: "1em" }} />
      <Link to="/Dashboard">
        <button
          className="dash"
          style={{
            background:
              location.pathname.includes("/Dashboard") && backgroundColor,
          }}
        >
          Home
        </button>
      </Link>
      <Link to="/putting-session">
        <button
          className="putt"
          style={{
            background:
              location.pathname.includes("/putting-session") && backgroundColor,
          }}
        >
          Begin a Putting Session
        </button>
      </Link>
      <button className="logout" onClick={props.clearToken}>
        Logout
      </button>
    </div>
  );
};

export default Nav;
