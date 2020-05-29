import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import Navbar from "./Navbar";

export default function WorldMap() {
  const [content, setContent] = useState("");

  return (
    <div className="">
      <div className="sticky-top">
        <Navbar className="sticky-top" />
      </div>
      <div className="map-fit">
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}
