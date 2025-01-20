import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "../components/Sidebar";

const Residential = () => {
  const fullpageOptions = {
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    easingcss3: "ease-in-out",
    credits: {enabled: false},
    navigation: true, // Enable navigation dots if needed
  }

  return (
    <div className="wrapper bg-red-300 flex">
      <Sidebar />
      <ReactFullpage
        {...fullpageOptions}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h1>Residential 1</h1>
            </div>
            <div className="section">
              <h1>Residential 2</h1>
            </div>
            <div className="section">
              <h1>Residential 3</h1>
            </div>
            <div className="section">
              <h1>Residential 4</h1>
            </div>
            <div className="section">
              <h1>Residential 5</h1>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Residential;
