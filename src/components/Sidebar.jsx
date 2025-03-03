import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  // Define the next link based on the current location
  let nextLink = "/residential";
  let nextText = "Go Residential";
  let nextIcon = faChevronRight;

  if (location.pathname === "/residential") {
    nextLink = "/booth";
    nextText = "Go Outlet";
  } else if (location.pathname === "/booth") {
    nextLink = "/furniture";
    nextText = "Go Furniture";
  } else if (location.pathname === "/furniture") {
    nextLink = "/office";
    nextText = "Go Office";
  }

  return (
    <>
      <div className="fixed hidden lg:flex font-raleway font-semibold bottom-5 justify-between left-0 h-auto w-screen text-black z-[999] p-4">
        <HashLink to="/#project" className="flex space-x-2 items-center ml-10">
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>Go Back</p>
        </HashLink>

        <div className="flex space-x-2 items-center">
          <FontAwesomeIcon icon={faAngleDoubleDown} />
          <p>Scrolling Down</p>
        </div>

        <HashLink to={nextLink} className="flex space-x-2 items-center mr-10">
          <p>{nextText}</p>
          <FontAwesomeIcon icon={nextIcon} />
        </HashLink>
      </div>
      {/* Mobile View */}

      <div className="lg:hidden fixed bottom-5 z-[999] text-sm flex justify-between left-0 h-auto w-screen  text-black  font-raleway font-semibold p-4">
        <HashLink to="/#project" className="flex space-x-2 items-center ml-10">
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>Go Back</p>
        </HashLink>
        <div></div>
        <HashLink to={nextLink} className="flex space-x-2 items-center mr-10">
          <p>{nextText}</p>
          <FontAwesomeIcon icon={nextIcon} />
        </HashLink>
      </div>
    </>
  );
};

export default Sidebar;
