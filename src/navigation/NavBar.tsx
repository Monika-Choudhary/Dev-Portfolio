import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="flex justify-center space-x-30">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about-me" end>
        About Me
      </NavLink>
      <NavLink to="/my-projects" end>
        My Projects
      </NavLink>
      <NavLink to="/contact" end>
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
