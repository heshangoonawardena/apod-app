import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";

const SideBar = (props) => {
  const { handleDisplayModal, data } = props;
  return (
    <div className="fixed inset-0 z-10 flex flex-col lg:relative lg:inset-unset">
      <div
        onClick={handleDisplayModal}
        className="absolute inset-0 bg-slate-800 opacity-60"
        id="background-overlay"
      ></div>
      <div
        id="sidebar-content"
        className="relative flex flex-col w-10/12 h-full max-w-4xl gap-4 p-4 ml-auto overflow-y-scroll z-15 bg-slate-800 lg:m-unset"
      >
        <h1 className="text-2xl font-medium">{data?.title}</h1>
        <div className="flex-1">
          <p className="pb-3 text-lg font-extralight">{data?.date}</p>
          <p>
            {data?.explanation}
          </p>
        </div>
        <button
          onClick={handleDisplayModal}
          className="py-4 mr-auto duration-200 bg-transparent border-none outline-none cursor-pointer hover:opacity-70"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
