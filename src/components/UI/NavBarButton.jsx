import t from "prop-types";

const NavBarButton = ({ name, to }) => {
  return (
    <a
      className="p-1 px-2 cursor-pointer w-full hover:bg-slate-400 transition-colors"
      href={to}
    >
      {name}
    </a>
  );
};

NavBarButton.propTypes = {
  name: t.string,
  to: t.string,
};

export default NavBarButton;
