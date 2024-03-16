import { ReactSVG } from "react-svg";

const NewChat = () => {
  return (
    <ReactSVG
      src="/write.svg"
      beforeInjection={(svg) => {
        svg.setAttribute("style", "width: 25px");
      }}
    />
  );
};

export default NewChat;
