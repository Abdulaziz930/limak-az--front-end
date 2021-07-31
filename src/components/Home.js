import React from "react";
import Certificates from "./Certificates";
import HowItWorks from "./HowItWorks";
import Intro from "./Intro";
import News from "./News";
import RecomendedShops from "./RecomendedShops";
import Tariffs from "./Tariffs";
const Home = () => {
  return (
    <div className='main'>
      <Intro />
      <HowItWorks />
      <Tariffs />
      <Certificates />
      <News />
      <RecomendedShops />
    </div>
  );
};

export default Home;
