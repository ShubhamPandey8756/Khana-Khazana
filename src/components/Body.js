import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    const[listRes,setListRes]=useState(restList);
    console.log(restList);
    console.log(listRes);
    return (
             <div className="body">
                <div className="filter">
                      <button onClick={()=>{
                    
                        const filterData=listRes.filter((res)=>res.info.avgRating>4);
                        console.log(filterData);
                        setListRes(filterData);}
                    }
                    className="filter-btn">Top Rated Restaurant</button>
                </div>
           <div className="res-container">
               {/* //Restaurant Card */}
               {
                listRes.map(resturant=>( <RestaurantCard key={resturant.info.id} 
                    restData={resturant.info}/>))
               }
              
               {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/> */}
              
           </div>

             </div>
    )
}
export default Body;