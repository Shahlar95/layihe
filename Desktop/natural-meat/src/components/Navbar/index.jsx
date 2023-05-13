import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import {
  HomeOutlined,
  InfoOutlined,
  Inventory2Outlined,
  ContactPageOutlined,
  LoginOutlined,
  LogoutOutlined,
  LanguageOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@mui/icons-material";

import logo from "../../assets/image/natural-meat-logo.png";

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 640 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <aside
      id="logo-sidebar"
      className={`sm:hidden fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
        openNav ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-">
        <ul className="space-y-2 font-medium">
          <NavLink
            onClick={() => setActiveItem("home")}
            to="/"
            className={`${
              activeItem == "home" ? "text-red-500" : ""
            } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:transition-all`}
          >
            <HomeOutlined fontSize="small" />
            <span className="ml-3">Home</span>
          </NavLink>
          <NavLink
            onClick={() => setActiveItem("about")}
            to="/about"
            className={`${
              activeItem == "about" ? "text-red-500" : ""
            } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:transition-all`}
          >
            <InfoOutlined fontSize="small" />
            <span className="flex-1 ml-3 whitespace-nowrap">About us</span>
          </NavLink>
          <NavLink
            onClick={() => setActiveItem("products")}
            to="/products"
            className={`${
              activeItem == "products" ? "text-red-500" : ""
            } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:transition-all`}
          >
            <Inventory2Outlined fontSize="small" />
            <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
          </NavLink>
          <NavLink
            onClick={() => setActiveItem("contact")}
            to="/contact"
            className={`${
              activeItem == "contact" ? "text-red-500" : ""
            } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:transition-all`}
          >
            <ContactPageOutlined fontSize="small" />
            <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
          </NavLink>
          <NavLink
            onClick={() => setActiveItem("signin")}
            to="signin"
            className={`${
              activeItem == "signin" ? "text-blue-500" : ""
            } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:transition-all`}
          >
            <LoginOutlined fontSize="small" />
            <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
          </NavLink>
          <NavLink
            onClick={() => setActiveItem("signout")}
            to="/signup"
            className={`${
              activeItem == "signout" ? "text-blue-500" : ""
            } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:transition-all`}
          >
            <LogoutOutlined fontSize="small" />
            <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
          </NavLink>
          <li>
            <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <LanguageOutlined fontSize="small" />
              <span className="flex-1 ml-3 whitespace-nowrap">Lang</span>
            </p>
          </li>
        </ul>
      </div>
    </aside>
  );

  return (
    <header className="flex flex-col justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700">
      <nav className="container hidden sm:flex justify-between items-center">
        <NavLink
          className={`${activeItem == "home" ? "text-red-500" : ""}`}
          to="/"
          onClick={() => setActiveItem("home")}
        >
          <img className="w-[150px]" src={logo} alt="logo" />
        </NavLink>
        <ul className="w-2/4 flex px-[15px] justify-between">
          <NavLink
            className={`${
              activeItem == "home" ? "text-red-500" : ""
            } text-white hover:text-red-500 transition-all hover:transition-all`}
            to="/"
            onClick={() => setActiveItem("home")}
          >
            Home
          </NavLink>
          <NavLink
            className={`${
              activeItem == "about" ? "text-red-500" : ""
            } text-white hover:text-red-500 transition-all hover:transition-all`}
            to="/about"
            onClick={() => setActiveItem("about")}
          >
            About us
          </NavLink>
          <NavLink
            className={`${
              activeItem == "products" ? "text-red-500" : ""
            } text-white hover:text-red-500 transition-all hover:transition-all`}
            to="/products"
            onClick={() => setActiveItem("products")}
          >
            Products
          </NavLink>
          <NavLink
            className={`${
              activeItem == "contact" ? "text-red-500" : ""
            } text-white hover:text-red-500 transition-all hover:transition-all`}
            to="contact"
            onClick={() => setActiveItem("contact")}
          >
            Contact
          </NavLink>
        </ul>
        <div className="text-white flex items-center gap-4">
          <div>Lang</div>
          <div className="flex w-max gap-4">
            <Button
              className={`bg-blue-500 p-[6px]`}
              variant="gradient"
              size="sm"
            >
              Sign In
            </Button>
            <Button
              className={`bg-blue-500 p-[6px]`}
              variant="gradient"
              size="sm"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
      {/* sidebar */}
      <nav className="sm:hidden fixed h-[67px] top-0 z-50 w-full bg-gradient-to-r from-slate-900 to-slate-700 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <NavLink to="/" className="flex ml-2 md:mr-24">
                <img src={logo} className="h-8 mr-3" alt="FlowBite Logo" />
              </NavLink>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setOpenNav(!openNav)}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {openNav ? <CloseOutlined /> : <MenuOutlined />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {navList}
      {/* sidebar */}
    </header>
  );
};
