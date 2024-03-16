import { ReactSVG } from "react-svg";

const ConcatInfo = () => {
  return (
    <ReactSVG
      src="/info.svg"
      beforeInjection={(svg) => {
        svg.setAttribute("style", "width: 20px");
      }}
    />
  );
};

export default ConcatInfo;
