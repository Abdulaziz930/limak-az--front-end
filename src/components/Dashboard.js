import React from "react";
import Certificates from "./Certificates";
import HowItWorks from "./HowItWorks";
import Intro from "./Intro";
import News from "./News";
import Tariffs from "./Tariffs";

const Dashboard = () => {
  return (
    <div className='main'>
      <Intro />
      <HowItWorks />
      <Tariffs />
      <Certificates />
      <News />
    </div>
  );
};

export default Dashboard;
