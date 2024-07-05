import React, { useState, useEffect } from "react";
import Counter from "../Counter/Counter";

const PuttingSession = () => {
  const [putt10Feet, setPutt10Feet] = useState(0);
  const [putt15Feet, setPutt15Feet] = useState(0);
  const [putt20Feet, setPutt20Feet] = useState(0);
  const [putt25Feet, setPutt25Feet] = useState(0);
  const [putt30Feet, setPutt30Feet] = useState(0);
  const [putt35Feet, setPutt35Feet] = useState(0);
  const [putt10Points, setPutt10Points] = useState(0);
  const [putt15Points, setPutt15Points] = useState(0);
  const [putt20Points, setPutt20Points] = useState(0);
  const [putt25Points, setPutt25Points] = useState(0);
  const [putt30Points, setPutt30Points] = useState(0);
  const [putt35Points, setPutt35Points] = useState(0);

  const handleChange = (state, value) => {
    switch (state) {
      case "10 feet":
        setPutt10Feet(value);
        break;
      case "15 feet":
        setPutt15Feet(value);
        break;
      case "20 feet":
        setPutt20Feet(value);
        break;
      case "25 feet":
        setPutt25Feet(value);
        break;
      case "30 feet":
        setPutt30Feet(value);
        break;
      case "35 feet":
        setPutt35Feet(value);
        break;
      default:
        console.log("Something went wrong");
    }
  };

  const handleSubmit = async () => {
    e.preventDefault();
    try {
      const response = await fetch("backend url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          putt10Feet: putt10Feet,
          putt15Feet: putt15Feet,
          putt20Feet: putt20Feet,
          putt25Feet: putt25Feet,
          putt30Feet: putt30Feet,
          putt35Feet: putt35Feet,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const puttData = await response.json();
      console.log(puttData);
      const points = async () => {
        if (putt10Feet > 8) {
          setPutt10Points(10);
        } else if (putt10Feet > 7 && putt10Feet < 8) {
          setPutt10Points(8);
        } else if (putt10Feet > 6 && putt10Feet <= 7) {
          setPutt10Points(7);
        } else if (putt10Feet > 5 && putt10Feet <= 6) {
          setPutt10Points(6);
        } else if (putt10Feet > 4 && putt10Feet <= 5) {
          setPutt10Points(5);
        } else if (putt10Feet > 3 && putt10Feet <= 4) {
          setPutt10Points(4);
        } else if (putt10Feet > 2 && putt10Feet <= 3) {
          setPutt10Points(3);
        } else if (putt10Feet > 1 && putt10Feet <= 2) {
          setPutt10Points(2);
        } else if (putt10Feet > 0 && putt10Feet <= 1) {
          setPutt10Points(1);
        } else {
          console.log("There has been an error");
        }
        points(puttData);
        // try {
        //   const response = await fetch("fetch url", {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
        //     },
        //   });
        //   const json = await response.json();
        //   console.log(json);
        // } catch (err) {
        //   console.log(err);
        // }
      };
    } catch (err) {
      console.error("You hit an error during submission", err);
    }
  };
  // const data = {
  //   putt10Feet,
  //   putt15Feet,
  //   putt20Feet,
  //   putt25Feet,
  //   putt30Feet,
  //   putt35Feet,
  // };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <Counter
            name="10 Feet"
            onChange={(e) => handleChange("10 feet", e.target.value)}
          >
            10
          </Counter>
          <Counter
            name="15 Feet"
            onChange={(e) => handleChange("15 feet", e.target.value)}
          >
            15
          </Counter>
          <Counter
            name="20 Feet"
            onChange={(e) => handleChange("20 feet", e.target.value)}
          >
            20
          </Counter>
          <Counter
            name="25 Feet"
            onChange={(e) => handleChange("25 feet", e.target.value)}
          >
            25
          </Counter>
          <Counter
            name="30 Feet"
            onChange={(e) => handleChange("30 feet", e.target.value)}
          >
            30
          </Counter>
          <Counter
            name="35 Feet"
            onChange={(e) => handleChange("35 feet", e.target.value)}
          >
            35
          </Counter>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default PuttingSession;
