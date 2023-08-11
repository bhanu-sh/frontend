import React from "react";
import mylogo from "../logo.svg";

const Home = () => {
  let name = "Bhanu";

  let num1 = 40;
  let num2 = 60;

  const addnums = (a, b) => {
    return a + b;
  };

  return (
    <div className="home-bg">
      <div className="container">
        <h1>Welcome to Home Page</h1>
        <h1
          style={{ color: "red", backgroundColor: "yellow", fontSize: "50px" }}
        >
          Using Inline CSS
        </h1>
        {name}
        <h3>
          Product of {num1} and {num2} is {num1 * num2}
        </h3>
        <h1>{addnums(26375, 827)}</h1>
        <p className="myclass">className is used instead of class in JSX</p>

        <input type="text" />
        <br />

        <img src="/logo192.png" alt="" />

        <img src={mylogo} alt="" />
      </div>
    </div>
  );
};

export default Home;
