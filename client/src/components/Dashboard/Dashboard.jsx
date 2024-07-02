import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [putt10Feet, setPutt10Feet] = useState([]);
  const [putt15Feet, setPutt15Feet] = useState([]);
  const [putt20Feet, setPutt20Feet] = useState([]);
  const [putt25Feet, setPutt25Feet] = useState([]);
  const [putt30Feet, setPutt30Feet] = useState([]);
  const [putt35Feet, setPutt35Feet] = useState([]);

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
        setStats(response.circle);
        setPutt10Feet(response.putt10);
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
        {stats.map((obj) => {
          return (
            <Card key={obj.id}>
              <Box>
                <Typography>MyCircle: {obj.circle}</Typography>
              </Box>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
