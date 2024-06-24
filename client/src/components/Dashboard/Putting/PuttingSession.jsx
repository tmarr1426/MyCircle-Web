import React, { useState, useEffect } from "react";
import Counter from "../Counter/Counter";

const PuttingSession = () => {
  const [putt10Feet, setPutt10Feet] = useState(0);
  const [putt15Feet, setPutt15Feet] = useState(0);
  const [putt20Feet, setPutt20Feet] = useState(0);
  const [putt25Feet, setPutt25Feet] = useState(0);
  const [putt30Feet, setPutt30Feet] = useState(0);
  const [putt35Feet, setPutt35Feet] = useState(0);

  const handleSubmit = () => {
    const data = {
      putt10Feet,
      putt15Feet,
      putt20Feet,
      putt25Feet,
      putt30Feet,
      putt35Feet,
    };
  };

  return <Counter></Counter>;
};

export default PuttingSession;
