import React from "react";

const Main = (props) => {
  const {data} = props;
  return (
    <div className="flex flex-col ">
      <img
        className="object-cover w-full h-full"
        src={data.hdurl}
        alt="{data.title || 'bg-img}"
      />
    </div>
  );
};

export default Main;
