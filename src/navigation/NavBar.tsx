import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative  text-white">
      {/* Desktop Navbar */}
      <h1 className="text-lg font-bold hidden md:flex justify-center ">Monika Kaur Choudhary</h1>
      <div className=" hidden md:flex justify-center space-x-10 p-4 m-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 p-2 rounded" : "hover:text-fuchsia-500"
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 p-2 rounded" : "hover:text-fuchsia-500"
          }
          end
        >
          About Me
        </NavLink>
        <NavLink
          to="/my-projects"
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 p-2 rounded" : "hover:text-fuchsia-500"
          }
          end
        >
          My Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "bg-fuchsia-700 p-2 rounded" : "hover:text-fuchsia-500"
          }
          end
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center p-4">
      <h1 className="text-lg font-bold">Monika Kaur Choudhary</h1>
        <button onClick={toggleMenu} className="text-2xl ">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-full bg-fuchsia-800 flex flex-col items-start p-2 space-y-4 py-4 z-50 my-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-fuchsia-900 p-2 rounded" : "hover:text-fuchsia-500"
            }
            end
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive ? "bg-fuchsia-700 p-2 rounded" : "hover:text-fuchsia-500"
            }
            end
            onClick={toggleMenu}
          >
            About Me
          </NavLink>
          <NavLink
            to="/my-projects"
            className={({ isActive }) =>
              isActive ? "bg-fuchsia-700 p-2 rounded" : "hover:text-fuchsia-500"
            }
            end
            onClick={toggleMenu}
          >
            My Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "bg-fuchsia-700 p-2 rounded" : "hover:text-fuchsia-500"
            }
            end
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;