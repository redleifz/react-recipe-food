import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);




  useEffect(() => {

    // if (id !== "") {
    //   async function getItem() {
    //     const response = await axios.get(
    //       `https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${id}`
    //     );
    //     setItem(response.data.meals[0]);
    //   }

    //   getItem();
    //   //console.log(item);
    // }

  
      if(search !== ''){
        async function fetchAPI(){
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${search}`) 
            setResult(response.data.meals);
          }
        fetchAPI();
      } else {
          setResult(NaN)
      }
  
  }, [search]);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center flex-1">
        <div className="flex justify-center fixed top-[3rem] shadow-md w-full pb-3 z-10 bg-[#FFD8A9]">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="p-3 px-[4rem] text-center text-xl rounded-xl mt-3"
            placeholder="search your food ..."
          ></input>
        </div>

        { (!result) ? (
          <div className="grid  h-full mb-10 absolute top-[9rem]">
            <span className="text-xl">Recipt Not Found</span>
          </div>
        ) 
   
        
        : (
          <div className="grid  h-full mb-10 absolute top-[8rem]
          xs:grid-cols-1
          sm:grid-cols-2  
          lg:grid-cols-4
          justify-center grid-cols-4 mt-5 gap-3">
            {result.map((data) => {
              return (
                <div key={data.idMeal}>
                  <MealItem id={data.idMeal} name={data.strMeal} image={data.strMealThumb} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
