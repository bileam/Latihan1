import { useState } from "react";
import home from "../assets/home.svg";
import shop from "../assets/shop.svg";
import suka from "../assets/favorit.svg";

const Sidebar = () => {
  const [burger, setBurger] = useState(false);
  console.log(burger);

  return (
    <div className="min-h-dvh bg-blue-50 ">
      <div
        className={`group overflow-hidden flex flex-col px-2 bg-blue-800 py-3 h-dvh  transition-all  duration-500 ease-in ${
          burger ? "w-40" : " w-10"
        }`}
      >
        <div className="flex items-center gap-1 justify-between">
          <h1
            className={`overflow-hidden transition-all duration-500 ease-in-out text-white ${
              burger ? "opacity-100 " : "opacity-0 "
            }`}
          >
            DASBOARD
          </h1>
          {/*  burger */}
          <button
            onClick={() => setBurger((prev) => !prev)}
            className="flex flex-col justify-center items-center gap-1  "
          >
            <div
              className={`border border-white w-5 transition duration-500  ${
                burger ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`border border-white w-5 transition duration-500  ${
                burger ? "opacity-0 " : "opacity-100"
              }`}
            ></div>
            <div
              className={`border border-white w-5 transition duration-500 ${
                burger ? "-rotate-45 -translate-y-1" : ""
              } `}
            ></div>
          </button>
        </div>
        <div
          className={`mt-10 flex-col  flex gap-4 w-30   ease-in-out transition duration-500 ${
            burger ? "translate-x-2" : "-translate-x-2 "
          } `}
        >
          <button
            className={`flex gap-2 cursor-pointer py-2 px-2 ${
              burger
                ? "  bg-blue-600 rounded hover:bg-blue-900 transition duration-500"
                : ""
            }`}
          >
            <img src={home} alt="" />
            <h1
              className={`overflow-hidden transition-all duration-500 ease-in-out text-white ${
                burger ? "opacity-100" : "opacity-0"
              }`}
            >
              HOME
            </h1>
          </button>
          <button
            className={`flex gap-2 cursor-pointer py-2 px-2${
              burger
                ? "  bg-blue-600 rounded hover:bg-blue-900 transition duration-500"
                : ""
            }`}
          >
            <img src={suka} alt="" />
            <h1
              className={`overflow-hidden transition-all duration-500 ease-in-out text-white ${
                burger ? "opacity-100" : "opacity-0"
              }`}
            >
              PRODUCT
            </h1>
          </button>
          <button
            className={`flex gap-2 cursor-pointer py-2 px-2${
              burger
                ? "  bg-blue-600 rounded hover:bg-blue-900 transition duration-500"
                : ""
            }`}
          >
            <img src={shop} alt="" />
            <h1
              className={`overflow-hidden transition-all duration-500 ease-in-out text-white ${
                burger ? "opacity-100" : "opacity-0"
              }`}
            >
              KATEGORI
            </h1>
          </button>
        </div>
      </div>
      {/* isi konten */}
    </div>
  );
};
export default Sidebar;
