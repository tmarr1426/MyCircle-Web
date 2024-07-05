import React from "react";
import HeaderImage from "../assets/mycircle v2.png";

const Header = () => {
  return (
    <div>
      <img className="header" src={HeaderImage} style={{ width: "80em" }} />
    </div>
  );
};

export default Header;
