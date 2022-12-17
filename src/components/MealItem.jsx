import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ name, image, id }) => {
  let navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => {
          navigate(`/${id}`);
        }}
        className="w-[300px] lg:w-[200px] shadow-lg cursor-pointer"
      >
        <img alt={id} className="w-full rounded-t-xl" src={image}></img>
        <div className="bg-[#FFD8A9] h-[30px] text-center overflow-hidden flex items-center justify-center py-5 ">
          <span className="text-black text-sm font-bold">{name.slice(0,45)}</span>
        </div>
      </div>
    </>
  );
};

export default MealItem;
