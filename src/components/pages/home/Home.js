import React from "react";
import Certificates from "./Certificates";
import HowItWorks from "./HowItWorks";
import Intro from "./Intro";
import News from "./News";
import RecommendedShops from "./RecommendedShops";
import Tariffs from "./Tariffs";
import homeRoute from "../../../routes/home/home.json";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";
import { useSelector } from "react-redux";

const Home = () => {
  const { activeLanguage } = useSelector((state) => state.languages);

  return (
    <div className='main'>
      <MetaDecorator
        title={homeRoute[activeLanguage].pageTitle}
        description={homeRoute[activeLanguage].pageDescription}
      />
      <Intro />
      <HowItWorks />
      <Tariffs />
      <Certificates />
      <News />
      <RecommendedShops />
    </div>
  );
};

export default Home;
