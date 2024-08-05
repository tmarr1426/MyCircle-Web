import React, { useState, useEffect } from "react";
import Counter from "../Counter/Counter";

const PuttingSession = () => {
  const [formData, setFormData] = useState({
    "10 feet": "",
    "15 feet": "",
    "20 feet": "",
    "25 feet": "",
    "30 feet": "",
    "35 feet": "",
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(formData)) {
      localStorage.setItem(key, value);
    }
    console.log("Form data saved to local storage:", formData);
  };

  return (
    <>
      <div className="counter">
        <form onSubmit={handleSubmit}>
          <Counter
            name="10 Feet"
            className="putt-session"
            onChange={(value) => handleChange("10 feet", value)}
          >
            10
          </Counter>
          <Counter
            name="15 Feet"
            className="putt-session"
            onChange={(value) => handleChange("15 feet", value)}
          >
            15
          </Counter>
          <Counter
            name="20 Feet"
            className="putt-session"
            onChange={(value) => handleChange("20 feet", value)}
          >
            20
          </Counter>
          <Counter
            name="25 Feet"
            className="putt-session"
            onChange={(value) => handleChange("25 feet", value)}
          >
            25
          </Counter>
          <Counter
            name="30 Feet"
            className="putt-session"
            onChange={(value) => handleChange("30 feet", value)}
          >
            30
          </Counter>
          <Counter
            name="35 Feet"
            className="putt-session"
            onChange={(value) => handleChange("35 feet", value)}
          >
            35
          </Counter>
          <button className="submit1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PuttingSession;
