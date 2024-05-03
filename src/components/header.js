import logo from "../components/logo.jpg";
import {Link}  from "react-router-dom"; 

export const Header = () => {
  return (
    <div className="bg-cyan-900 flex p-2 justify-between h-16">
      <Link to="/"><img
        src={logo}
        className="rounded-full w-[50px] border-white border-2"
        alt="logo"
      /></Link>

      <ul className=" ml-16  font-sm text-2xl flex items-center gap-3  ">
        <Link to="/"><li className="cursor-pointer text-white bg-[#E7493B] p-2 px-3 border border-white rounded-md ">
          Home
        </li>
        </Link>
        <Link to="/Dogs"> <li className="cursor-pointer text-white bg-[#E7493B] p-2 px-3 border border-white rounded-md ">
          Random Dogs
        </li>
        </Link>
        <Link to="/about">
          <li className="cursor-pointer bg-[#E7493B] text-white p-2 px-3 border border-white rounded-md ">
            About
          </li>
        </Link>
      </ul>

      <button className="border p-2 bg-[#E7493B] rounded-md text-white font-medium text-2xl">
        Subscribe
      </button>
    </div>
  );
};
