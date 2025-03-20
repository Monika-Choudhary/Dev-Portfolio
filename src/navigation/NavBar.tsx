import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="flex justify-center space-x-30">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-fuchsia-900 p-2" : "text-white"
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/about-me"
        className={({ isActive }) =>
          isActive ? "bg-fuchsia-900 p-2" : "text-white"
        }
        end
      >
        About Me
      </NavLink>
      <NavLink
        to="/my-projects"
        className={({ isActive }) =>
          isActive ? "bg-fuchsia-900 p-2" : "text-white"
        }
        end
      >
        My Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "bg-fuchsia-900 p-2" : "text-white"
        }
        end
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
