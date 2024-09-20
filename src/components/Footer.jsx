import { FaInfoCircle } from "react-icons/fa";
import React from "react";

const Footer = (props) => {
  const {handleDisplayModal, data} = props
  return (
    <footer className="fixed bottom-0 left-0 flex justify-between w-full p-4">
      {/* console.log(data); */}
      
      <div className="absolute inset-0 -z-1 bg-gradient-to-t from-slate-950 to-transparent"></div>
      <div className="z-10 flex flex-col">
        <h1 className="text-base font-extralight">APOD PROJECT</h1>
        <h1 className="mb-4 text-2xl font-semibold">{data?.title}</h1>
      </div>
      <button onClick={handleDisplayModal} className="z-10 p-4 text-xl duration-200 bg-transparent border-none outline-none cursor-pointer hover:opacity-70">
        <FaInfoCircle />
      </button>
    </footer>
  );
};

export default Footer;
