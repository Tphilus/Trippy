import React from "react";
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkcardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        {WorkcardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
