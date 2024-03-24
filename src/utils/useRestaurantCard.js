import { useEffect, useState } from "react";
//import { Restaurant_URL } from "./constants";
const useRestaurantCard=()=>{
        // console.log(restList);
        // console.log(listRes);
        console.log("this restaurant card hook is called");
         const[listRes,setListRes]=useState([]);
         useEffect(()=>{
        //    console.log("useEffect called");
        fetchData();
            },[])
             console.log("before fetch called");
            const fetchData=async()=>{
                console.log("in fetch u are")
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            //console.log(data);
            const jsonData=await data.json();
            console.log(jsonData);
            //optional chaining of data...
        
            console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setListRes(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                ); 
                
                console.log("after fetch called");
                
        
        }
        return listRes;
}
export default useRestaurantCard;