import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
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
        const percentages = response.circle.map((item) => ({
          ...item,
          percentage: ((item.value / 10) * 100).toFixed(2), // Convert to percentage
        }));
        setStats(percentages);
      } catch (err) {
        console.log("There was an error getting the information.", err);
      }
    };
    myCircle();
  }, []);

  return (
    <>
      <div className="dashboard">
        <h1 className="mycircle-title">Welcome to MyCircle!</h1>
        <h4 className="mycircle-description">
          Every putting session will average your made putts together and give
          you what we call, MyCircle.
        </h4>
        <h4 className="mycircle-description">
          MyCircle is the area that you should be aiming to get your drives or
          approaches within to have a 90% confidence rate putt.
        </h4>
        {stats.map((obj) => {
          return (
            <Card key={obj.id} className={"mycircle-stats"}>
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
