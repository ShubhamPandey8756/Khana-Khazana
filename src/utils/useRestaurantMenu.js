import { useEffect, useState } from "react";
import {MENU_URL} from "../utils/constants";
const useRestaurantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null);
    useEffect(()=>{fetchData()}
      
    ,[]);
     const fetchData=async()=>{
     //console.log(MENU_URL+resId);
     const data=await fetch(MENU_URL+resId);
     //console.log("called json")
     const json=await data.json();
    //console.log("json is called"+json?.data?.cards[0]?.card?.card?.info?.name);
    setResInfo(json.data);

     }
return resInfo;
}
export default useRestaurantMenu;