import React from "react";
import { Link, Outlet } from "react-router-dom";
import Switcher from "../components/Darkmode/Switcher";

import { AiOutlineMenu } from "react-icons/ai";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import logo from "../assets/logo.png";
import fc from "../assets/fc.png";
import inst from "../assets/inst.png";
import twit from "../assets/twit.png";
import Drawer from "../components/Drawer";

const Layout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="section header bg-[#1F2E35] dark:bg-[#FFF]">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <header className="flex justify-between items-center">
            <Link to="/">
              <div className="logo flex gap-3">
                <img src={logo} alt="" />
                <span className="text-[#FFF] text-[30px] font-bold not-italic dark:text-[#173A56]">
                  Product
                </span>
              </div>
            </Link>
            <ul className="text-[#FFF] flex items-center gap-6 dark:text-[#22343D] sm:hidden md:flex">
              <Link to="/">
                <li>Product </li>
              </Link>
              <Link to="/Customers ">
                <li>Customers </li>
              </Link>
              <Link to="/Pricing ">
                <li>Pricing </li>
              </Link>
              <Link to="/Resources">
                <li>Resources</li>
              </Link>
              <button className="border border-[#BCD0E5] p-[4px] px-[12px] rounded-[4px]">
                Sign In
              </button>
              <button className="bg-[#02897A] p-[5px] px-[12px] rounded-[4px] text-[#FFFFFF]">
                Sign Up
              </button>
              <div>
                <Switcher />
              </div>
            </ul>
            {/* mobail-menu */}
            <div className="lg:hidden md:hidden">
              <Drawer />
            </div>
            {/* mobalmehu-end */}
          </header>
        </div>
      </div>

      {/* Outlet*/}
      <Outlet />

      {/* Footer */}
      <section className="section header bg-[#1F2E35] dark:bg-[#FFF] text-[#FFF] dark:text-[#173A56]">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <footer className="sm:flex sm:flex-col md:flex md:flex-row  justify-around items-center">
            <div className=" w-[28%]">
              <Link to="/Product">
                <div className="logo flex gap-3">
                  <img src={logo} alt="" />
                  <span className="text-[#FFF] text-[30px] font-bold not-italic dark:text-[#173A56]">
                    Product
                  </span>
                </div>
              </Link>
              <div className="flex mt-6 gap-4">
                <img src={inst} alt="" />
                <img src={fc} alt="" />
                <img src={twit} alt="" />
              </div>
            </div>
            <div className=" footer_h3 mt-[80px] sm:flex sm:flex-col md:flex md:flex-row w-[80%] justify-around sm:gap-y-[40px]">
              <div className="text-center md:text-start">
                <h3>Resource</h3>
                <ul className="mt-[15px] sm:flex justify-between md:block">
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="text-center md:text-start">
                <h3>Legal Stuff</h3>
                <ul className="mt-[15px]">
                  <li>Disclaimer </li>
                  <li>Financing </li>
                  <li> Privacy Policy</li>
                  <li> Terms of Service</li>
                </ul>
              </div>
              <div className=" input_foot md:w-[30%] sm:w-full text-center md:text-start">
                <h3>knowing you're always on the best energy deal.</h3>
                <input
                  type="text"
                  className="p-[8px] block mt-5 mb-[20px] rounded-md w-[100%]"
                />
                <button className="bg-[#02897A] p-[5px] px-[12px] rounded-[4px] text-[#FFFFFF]">
                  Sign Up
                </button>
              </div>
            </div>
          </footer>
          <div className="sm:mt-[40px] md:mt-auto">
            <p className="text-[#FFF] flex justify-center mt-[10px]">
              Made With Love By Figmaland All Right Reserved
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
