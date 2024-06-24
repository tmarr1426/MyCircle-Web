import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (state, value) => {
    switch (state) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        console.log("Something went wrong");
    }
  };

  const handleSignup = async () => {
    try {
      const response = await (
        await fetch("http://localhost:8081/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
      ).json();
      console.log(response);
      props.updateToken(response.Token);
      props.setUserType("parent");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async () => {
    try {
      // Fetch from the parent account login route
      const login = await fetch("http://localhost:8081/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      // Check if the parent account login was successful
      if (login.ok) {
        const loginData = await login.json();
        console.log("Login Successful:", loginData);
        props.updateToken(loginData.token, "parent");
        props.setUserId(loginData.user.id);
        console.log("UPDATED USER ID" + loginData.user.id);
        return; // Exit the function if parent login was successful
      }
      // Handle case where neither parent nor child login was successful
      throw new Error("Failed to login. Please check your credentials.");
    } catch (err) {
      console.log(err);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <>
      <div
        className="authentication"
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "2em",
          justifyContent: "center",
        }}
      >
        <Signup handleSignup={handleSignup} handleChange={handleChange} />
        <Login handleLogin={handleLogin} handleChange={handleChange} />
      </div>
    </>
  );
};

export default Auth;
