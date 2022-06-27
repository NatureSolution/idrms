import React from "react";
import thumb from "../../Image/world.png";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <img src={thumb} alt="" />
      </div>
    </div>
  );
};

export default Home;
