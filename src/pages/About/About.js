import React from "react";
import { InfoSection } from "../../components";
import { aboutObjOne } from "./Data";

const About = () => {
  return (
    <div>
      <InfoSection {...aboutObjOne} />
    </div>
  );
};

export default About;
