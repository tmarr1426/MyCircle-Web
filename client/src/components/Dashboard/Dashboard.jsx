import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [stats, setStates] = useState([]);
  useEffect(() => {
    const myCircle = async () => {
      try {
        const data = await fetch("Fetch URL", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
          },
        });
        const response = await data.json();
        console.log("Response", response);
      } catch (err) {
        console.log("There was an error getting the information.", err);
      }
    };
    myCircle();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to MyCircle!</h1>
        <h4>
          Every putting session will average your made putts together and give
          you what we call, MyCircle.
        </h4>
        <h4>
          MyCircle is the area that you should be aiming to get your drives or
          approaches within to have a 90% confidence rate putt.
        </h4>
        <h1>MyCircle: {myCircle}</h1>
      </div>
    </>
  );
};

export default Dashboard;
