import React from "react";
import { InfoSection } from "../../components";
import { portfolioObjOne } from "./Data";

const Portfolio = () => {
  return (
    <div>
      <InfoSection {...portfolioObjOne} />
    </div>
  );
};

export default Portfolio;
