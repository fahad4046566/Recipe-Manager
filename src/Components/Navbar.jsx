import { NavLink } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { useState , useEffect,useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  const detailsRef = useRef(null);

  const closeMenu = useCallback(() => {
    setisopen(false);
    if (detailsRef.current) detailsRef.current.open = false;
  }, [setisopen]);

  const location = useLocation();

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);
  return (
    <nav className="navbar bg-base-100 shadow-lg px-4">
      <div className="flex-1 items-center">
        <NavLink to="/" className="btn btn-ghost text-xl">
          <MdFoodBank className="text-4xl text-orange-500" />
          Recipe Manager
        </NavLink>
      </div>

      <div className="flex-none flex items-center gap-2">
        {/* Mobile menu */}
        <div className="block md:hidden">
          <details
            ref={detailsRef}
            className="dropdown dropdown-end"
            onToggle={(e) => setisopen(e.target.open)}
          >
            <summary className="btn m-1">
              {isopen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
              <li className="text-xl">
                <NavLink
                  className={(e) => {
                    return e.isActive ? `bg-orange-400` : "";
                  }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink
                  className={(e) => {
                    return e.isActive ? `bg-orange-400` : "";
                  }}
                  to="/favorites"
                >
                  Favorites
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink
                  className={(e) => {
                    return e.isActive ? `bg-orange-400` : "";
                  }}
                  to="/add"
                >
                  Add Recipe
                </NavLink>
              </li>
            </ul>
          </details>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 flex gap-1">
            <li className="text-xl">
              <NavLink
                className={(e) => {
                  return e.isActive ? `bg-orange-400` : "";
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                className={(e) => {
                  return e.isActive ? `bg-orange-400` : "";
                }}
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
            <li className="text-xl">
              <NavLink
                className={(e) => {
                  return e.isActive ? `bg-orange-400` : "";
                }}
                to="/add"
              >
                Add Recipe
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
      
export default Navbar;
