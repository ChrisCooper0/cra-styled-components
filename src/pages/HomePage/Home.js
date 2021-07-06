import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "../Data";
import { InfoSection } from "../../components";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
    </div>
  );
};

export default Home;
