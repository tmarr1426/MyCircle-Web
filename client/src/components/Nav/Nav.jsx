import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  let location = useLocation();
  console.log(location);
  let backgroundColor = "#569AA6";

  return (
    <div
      className="w3-card-2 w3-sidebar w3-bar-block w3-display-left roboto-regular gradient-vertical"
      style={{ width: "15em" }}
    >
      <img
        className="w3-bar-item"
        // src={HeaderImage}
        style={{ height: "8em", left: "1em" }}
      />
      <Link to="/Dashboard">
        <button
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
          style={{
            background:
              location.pathname.includes("/putting-session") && backgroundColor,
          }}
        >
          Begin a Putting Session
        </button>
      </Link>
      <button
        className="w3-display-bottomleft"
        onClick={props.clearToken}
        style={{ marginBottom: "2em", marginLeft: "3.00em" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;
