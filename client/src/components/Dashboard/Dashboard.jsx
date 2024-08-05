import React, { useState, useEffect, useRef } from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const Dashboard = () => {
  const [stats, setStats] = useState(0);
  const myCircleStatsRef = useRef([]);
  let stat1 = 17;

  useEffect(() => {
    // Initialize myCircleStatsRef from localStorage if it exists
    const storedCircleStats = JSON.parse(
      localStorage.getItem("myCircleStats")
    ) || [17];
    myCircleStatsRef.current = storedCircleStats;

    // Calculate the new totalStats
    const putt10 = parseFloat(localStorage.getItem("10 feet")) || 0;
    const putt15 = (parseFloat(localStorage.getItem("15 feet")) || 0) / 2;
    const putt20 = (parseFloat(localStorage.getItem("20 feet")) || 0) / 2;
    const putt25 = (parseFloat(localStorage.getItem("25 feet")) || 0) / 2;
    const putt30 = (parseFloat(localStorage.getItem("30 feet")) || 0) / 2;
    const putt35 = (parseFloat(localStorage.getItem("35 feet")) || 0) / 2;
    console.log(putt10, putt15, putt20, putt25, putt30, putt35);
    const totalStats = putt10 + putt15 + putt20 + putt25 + putt30 + putt35;

    // Update the myCircleStatsRef array
    myCircleStatsRef.current.push(totalStats);
    console.log(myCircleStatsRef.current);

    // Update localStorage with the updated myCircleStatsRef array
    localStorage.setItem(
      "myCircleStats",
      JSON.stringify(myCircleStatsRef.current)
    );

    // Calculate the new stat value
    localStorage.setItem("MyCircle Stat", totalStats);
    const myCircle =
      myCircleStatsRef.current.reduce((acc, val) => acc + val, 0) /
      myCircleStatsRef.current.length;
    console.log(myCircle);
    // const myCircle = parseInt((stat1 + totalStats) / 2);
    setStats(myCircle);
  }, []);

  return (
    <>
      <div>
        <h1 className="h1">Welcome to MyCircle!</h1>
        <h4 className="h4">
          Every putting session will average your made putts together and give
          you what we call, MyCircle.
        </h4>
        <h4 className="h4">
          MyCircle is the area that you should be aiming to get your drives or
          approaches within to have a 90% confidence rate putt.
        </h4>
        <Card>
          <Box>
            <Typography>MyCircle: {stats} Feet</Typography>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
