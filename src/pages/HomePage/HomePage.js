import React from "react";
import Content from "../../components/Content/Content";
import Hero from "../../components/Hero/Hero";
import Pricing from "../../components/Pricing/Pricing";
import { heroOne, heroTwo, heroThree, pricingData } from "../../data/homeData";

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Pricing />
    </React.Fragment>
  );
};

export default HomePage;
