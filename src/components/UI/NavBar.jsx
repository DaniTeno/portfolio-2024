import NavBarButton from "./NavBarButton";

const NavBar = () => {
  return (
    <nav className="bg-slate-500">
      <div className="flex flex-col justify-around whitespace-nowrap h-full">
        <NavBarButton name="Start" to="#start" />

        <NavBarButton name="Projects" to="#projects" />

        <NavBarButton name="Contact" to="#contact" />
      </div>
    </nav>
  );
};

export default NavBar;
