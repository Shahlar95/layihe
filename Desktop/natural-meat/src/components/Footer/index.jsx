import React from "react";
import { Typography, Link } from "@mui/material";
import {
  FacebookOutlined,
  Instagram,
  YouTube,
  LinkedIn,
} from "@mui/icons-material";
import logo from "../../assets/image/natural-meat-logo.png";

export const Footer = () => {
  return (
    <footer>
      <div className=" flex flex-col items-center text-gray-200 bg-gradient-to-b from-gray-950 to-red-950">
        <div className="container flex flex-col items-center sm:items-stretch">
          <div className="flex justify-center pt-[50px] pb-[50px]">
            <img className="w-[200px]" src={logo} alt="logo" />
          </div>
          <div className="flex flex-wrap justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <Typography variant="h5">PRODUCTS</Typography>
              <span className="block w-[80px] h-[2px] bg-red-600 mb-[10px]"></span>
              <span className="block w-[30px] h-[2px] bg-red-600 mb-[30px]"></span>
              <ul className="mb-[50px]">
                <li>Lorem...</li>
                <li>Lorem...</li>
                <li>Lorem...</li>
                <li>Lorem...</li>
                <li>Lorem...</li>
                <li>Lorem...</li>
              </ul>
            </div>
            <div>
              <Typography variant="h5">COMPANY</Typography>
              <span className="block w-[80px] h-[2px] bg-red-600 mb-[10px]"></span>
              <span className="block w-[30px] h-[2px] bg-red-600 mb-[30px]"></span>
              <ul className="mb-[50px]">
                <li>Lorem...</li>
                <li>Lorem...</li>
                <li>Lorem...</li>
                <li>Lorem...</li>
              </ul>
            </div>
            <div>
              <Typography variant="h5">CONTACT</Typography>
              <span className="block w-[80px] h-[2px] bg-red-600 mb-[10px]"></span>
              <span className="block w-[30px] h-[2px] bg-red-600 mb-[30px]"></span>
              <ul className="mb-[50px]">
                <li>Lorem...</li>
                <li>Lorem...</li>
                <li>Lorem...</li>
                <li>Lorem...</li>
                <li>Lorem...</li>
              </ul>
            </div>
            <div>
              <Typography variant="h5">FOLLOW US</Typography>
              <span className="block w-[80px] h-[2px] bg-red-600 mb-[10px]"></span>
              <span className="block w-[30px] h-[2px] bg-red-600 mb-[30px]"></span>
              <div className="mb-[50px]">
              <Link href="#">
                <FacebookOutlined
                  fontSize="medium"
                  className="mr-[5px] text-gray-400 hover:text-white transition-all hover:transition-all"
                />
              </Link>
              <Link href="#">
                <Instagram
                  fontSize="medium"
                  className="mr-[5px] text-gray-400 hover:text-white transition-all hover:transition-all"
                />
              </Link>
              <Link href="#">
                <YouTube
                  fontSize="medium"
                  className="mr-[5px] text-gray-400 hover:text-white transition-all hover:transition-all"
                />
              </Link>
              <Link href="#">
                <LinkedIn
                  fontSize="medium"
                  className="mr-[5px] text-gray-400 hover:text-white transition-all hover:transition-all"
                />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center text-gray-200 bg-gray-950 pt-[20px] pb-[20px]">
        <div>
          <Typography variant="body2">
            © 2023 Natural Meat Az LTD. All Rights Reserved
          </Typography>
          <Typography>*Lorem ipsum dolor sit amet.</Typography>
        </div>
        <div>
          <Typography variant="body2">
            Terms & Conditions | Privacy Policy | Cookie List | Cookies Settings
            | Imprint
          </Typography>
        </div>
      </div>
    </footer>
  );
};
