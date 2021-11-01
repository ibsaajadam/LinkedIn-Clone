import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Ibsaa FINALLY got a job as a Software Engineer!!!", "Tech - 1,000,000 readers")}
      {newsArticle("When will Kyrie Irving come back?", "Sports - 500,000 readers")}
      {newsArticle("Coronavirus: US Updates", "Health - 2,000,000 readers")}
      {newsArticle("Tesla hits new highs", "Cars & Auto- 750,000 readers")}
      {newsArticle("Woman confronts man for harassing her at gym", "Health- 600,000 readers")}
      {newsArticle("Jobs that are WAYYY too overpaid!", "Lifestyle- 300,000 readers")}
    </div>
  )
}

export default Widgets

// rfce
