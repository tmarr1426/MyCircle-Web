import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const Dashboard = () => {
  const [stats, setStats] = useState(0);

  let myCircle = 17;

  // useEffect(() => {
  //   const myCircle = async () => {
  //     try {
  //       const data = await fetch("Fetch URL", {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
  //         },
  //       });
  //       const response = await data.json();
  //       console.log("Response", response);
  //       setStats(response.circle);
  //       setPutt10Feet(response.putt10);
  //     } catch (err) {
  //       console.log("There was an error getting the information.", err);
  //     }
  //   };
  //   myCircle();
  // }, []);
  useEffect(() => {
    const putt10 = parseFloat(localStorage.getItem("10 feet")) || 0;
    const putt15 = parseFloat(localStorage.getItem("15 feet")) || 0;
    const putt20 = parseFloat(localStorage.getItem("20 feet")) || 0;
    const putt25 = parseFloat(localStorage.getItem("25 feet")) || 0;
    const putt30 = parseFloat(localStorage.getItem("30 feet")) || 0;
    const putt35 = parseFloat(localStorage.getItem("35 feet")) || 0;

    const totalStats = putt10 + putt15 + putt20 + putt25 + putt30 + putt35;
    const myCircleStat = totalStats / 6;

    setStats(myCircleStat);
    localStorage.setItem("myCircle", myCircleStat);
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
        {/* {stats.map((obj) => {
          return (
            <Card key={obj.id}>
              <Box>
                <Typography>MyCircle: {obj.circle}</Typography>
              </Box>
            </Card>
          );
        })} */}
        <Card>
          <Box>
            <Typography>MyCircle: {myCircle} Feet</Typography>
          </Box>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
