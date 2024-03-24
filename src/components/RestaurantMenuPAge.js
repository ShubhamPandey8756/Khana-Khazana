import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {MENU_URL} from "../utils/constants";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenuPAge=()=>{
    // const[resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    console.log(resId);
    const resInfo=useRestaurantMenu(resId);
  
    console.log("this is resInfo",resInfo);



    { console.log("Hello this is Menu Page Called")};
    {console.log(resInfo?.cards[2]?.card?.card?.info?.name)}

   
    const info = resInfo?.cards[0]?.card?.card?.info;
   
    const { name,cloudinaryImageId,cuisines,costForTwo } = info || {};

    const card=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   //  console.log("card hai ye",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
   //  console.log("card h",card);
    const {itemCards}=card||{};
    console.log("itemcard h",itemCards);
    const Itemcategories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
     (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("Itemcategories",Itemcategories);
    /*  const NestedItemcategories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
     (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  )*/
    return resInfo===null?<Shimmer/>:(
      <div className="text-center">
         
        
        <h1 className="font-bold my-6 text-2xl">{name} </h1>  
       
        <p   className=" text-lg">{cuisines.join(", ")}{" "}-{" "+costForTwo+" for Two"}</p>
         {Itemcategories.map((category)=>(<RestaurantCategory  key={category?.card?.card.title} data={category?.card?.card} />))}

  
      </div>
     
      


    );
};
export default RestaurantMenuPAge;