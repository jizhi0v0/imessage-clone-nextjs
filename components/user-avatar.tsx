import { ReactSVG } from "react-svg";

const UserAvatar = () => {
  return (
    <ReactSVG
      src="/user-avatar.svg"
      beforeInjection={(svg) => {
        svg.setAttribute("style", "width: 45px");
      }}
    />
  );
};

export default UserAvatar;
