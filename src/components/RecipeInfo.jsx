import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeInfo = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  let [getVdo, setGetVdo] = useState("");

  useEffect(() => {
    if (id !== "") {
      async function getItem() {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${id}`
        );
        setItem(response.data.meals[0]);
        setGetVdo(response.data.meals[0].strYoutube.replace("watch?v=","embed/"))


      }
      getItem();
      console.log(getVdo)
      //   if(item){
      //     const fixLink = item.strYoutube.replace("watch?v=","embed/");
      //     console.log(fixLink)
      //   }

      // setGetVdo(fixLink)
      //   console.log(fixLink)
      //   https://www.youtube.com/watch?v=FzNPPD8lbWg
      //   console.log(item.strYoutube);
    }
  }, []);

  return (
    <>
      <div className="mt-[4rem] flex flex-col items-center">
        <span className="text-2xl">Your recipe information here : </span>
        <h1 className="text-3xl font-bold">{item.strMeal}</h1>
        <div className="flex flex-row justify-center">
          <img
            className="w-[550px] h-[350px] object-cover my-3 rounded-xl shadow-lg"
            alt={item.id}
            src={item.strMealThumb}
          ></img>
          {/* <iframe
            className="rounded-lg "
            allowfullscreen="false"
            src="https://www.youtube.com/embed/ONX74yP6JnI"
          ></iframe> */}
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center my-5">
        <div className="flex flex-col items-start justify-start ml-10">
          <p className="text-2xl font-bold">Ingredients</p>
          <span className=" mt-5">{item.strIngredient1}</span>
          <span className="">{item.strIngredient2}</span>
          <span className="">{item.strIngredient3}</span>
          <span className="">{item.strIngredient4}</span>
          <span className="">{item.strIngredient5}</span>
          <span className="">{item.strIngredient6}</span>
          <span className="">{item.strIngredient7}</span>
          <span className="">{item.strIngredient8}</span>
          <span className="">{item.strIngredient9}</span>
          <span className="">{item.strIngredient10}</span>
          <span className="">{item.strIngredient11}</span>
          <span className="">{item.strIngredient12}</span>
          <span className="">{item.strIngredient13}</span>
          <span className="">{item.strIngredient14}</span>
          <span className="">{item.strIngredient15}</span>
          <span className="">{item.strIngredient16}</span>
          <span className="">{item.strIngredient17}</span>
          <span className="">{item.strIngredient18}</span>
          <span className="">{item.strIngredient19}</span>
          <span className="">{item.strIngredient20}</span>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-2xl font-bold">Instructions</h1>
          <p className="mt-5 ml-0 pr-10 text-justify">{item.strInstructions}</p>
        </div>
      </div>
      <div className="flex my-10 flex-row  justify-center">

          {getVdo ? 
           <div className="w-[550px] h-[350px]">
           <iframe
             className="w-full h-full"
             //   https://www.youtube.com/watch?v=FzNPPD8lbWg
             //    src="https://www.youtube.com/embed/ONX74yP6JnI"
             src = {getVdo}
             title="youtube"
             allowFullScreen
           ></iframe>
         </div>
          
        : "Video not found"}

       
      </div>
    </>
  );
};

export default RecipeInfo;
