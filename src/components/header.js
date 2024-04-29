import logo from "../components/logo.jpg";
import {Link}  from "react-router-dom"; 

export const Header = () => {
  return (
    <div className="bg-blue-400 flex p-2 justify-between h-16">
      <Link to="/"><img
        src={logo}
        className="rounded-full w-[50px] border-white border-2"
        alt="logo"
      /></Link>

      <ul className="  font-sm text-2xl flex items-center gap-3  ">
        <Link to="/"><li className="cursor-pointer bg-blue-300 p-2 px-3 border border-white rounded-md ">
          Home
        </li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer bg-blue-300 p-2 px-3 border border-white rounded-md ">
            About
          </li>
        </Link>
        <Link to="/contact"> <li className="cursor-pointer bg-blue-300 p-2 px-3 border border-white rounded-md ">
          Contact Us
        </li>
        </Link>
      </ul>

      <button className="border p-2 bg-blue-300 rounded-md font-medium text-2xl">
        Subscribe
      </button>
    </div>
  );
};
