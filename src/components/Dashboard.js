import React from "react";
import HowItWorks from "./HowItWorks";
import Intro from "./Intro";

const Dashboard = () => {
  return (
    <div className='main'>
      <Intro />
      <HowItWorks />
    </div>
  );
};

export default Dashboard;
