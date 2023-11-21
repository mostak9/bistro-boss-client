import { createElement, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/Auth/AuthProvider";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { FaCartPlus } from "react-icons/fa6";
import useCarts from "../../../hooks/useCarts/useCarts";
import useAdmin from "../../../hooks/useAdmin/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCarts();
  const [isAdmin] = useAdmin();
  
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'}>Contact Us</NavLink>
      </li>
      
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/shop/salad"}>Our Shop</NavLink>
      </li>
      <li>
        {
          user && isAdmin && <NavLink to='/dashboard/adminHome'>Dashboard</NavLink>
          // user ? isAdmin ? <NavLink to='/dashboard/adminHome'>Dashboard</NavLink> : <NavLink to='/dashboard/userHome'>Dashboard</NavLink>: ''
        }
        {
          user && !isAdmin && <NavLink to='/dashboard/userHome'>Dashboard</NavLink>
        }
        
      </li>
    </>
  );
  const handleSignOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const profileMenuItems = [
    {
      label: user?.displayName,
      icon: UserCircleIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      onclick: handleSignOut,
    },
  ];
  return (
    <>
      <div className="navbar text-white bg-black/30 fixed z-10 bg-opacity-20 max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black/40 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="flex flex-col  text-xl uppercase ml-3">
            <h2 className="font-cinzel text-3xl font-black">Bistro Boss</h2>
            <p className="text-xl font-bold tracking-[9.2px]">Restaurant</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                placement="bottom-end"
              >
                <MenuHandler>
                  <Button
                    variant="outlined"
                    color="blue-gray"
                    className="flex items-center w-24 gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                  >
                    <Avatar
                      variant="circular"
                      size="md"
                      alt="tania andrew"
                      className="border border-gray-900 p-0.5"
                      src={user?.photoURL}
                    />
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-3 w-3 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </MenuHandler>
                <MenuList className="p-1">
                  {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                      <MenuItem
                        key={label}
                        onClick={
                          isLastItem
                            ? () => {
                                closeMenu;
                                handleSignOut();
                              }
                            : {
                                closeMenu,
                              }
                        }
                        className={`flex items-center gap-2 rounded ${
                          isLastItem
                            ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                            : ""
                        }`}
                      >
                        {createElement(icon, {
                          className: `h-4 w-4 ${
                            isLastItem ? "text-red-500" : ""
                          }`,
                          strokeWidth: 2,
                        })}
                        <Typography
                          as="span"
                          variant="small"
                          className="font-normal"
                          color={isLastItem ? "red" : "inherit"}
                        >
                          {label}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Link to={'/dashboard/carts'}><button className="btn ml-2 btn-sm">
                <FaCartPlus/>
                <div className="badge badge-secondary">+{carts?.length || '0'}</div>
              </button></Link>
            </>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-sm btn-outline text-white border-white"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
