import React from "react";
import { ReactSVG } from "react-svg";

const SearchIcon = ({ classname }: { classname?: string }) => {
  return (
    <div className={classname}>
      <ReactSVG
        src="/search.svg"
        beforeInjection={(svg) => {
          svg.setAttribute("style", "width: 25px");
        }}
      />
    </div>
  );
};

export default SearchIcon;
