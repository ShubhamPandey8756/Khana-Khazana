import RestaurantCard ,{withOpenLabel}from "./RestaurantCard";
//import CircularIndeterminate from "./CircularProgress"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
   // const[listRes,setListRes]=useState([]);
    const [searchText,setSearchText]=useState("");
    const listRes=useRestaurantCard();
    const RestaurantOpenStatus=withOpenLabel(RestaurantCard);
    const onlineStatus=useOnlineStatus();
    console.log("Body Rendered",listRes);
//this is called conditional rendering.............
   if(onlineStatus==false){ 
    return(
      <h1>Looks Like ur not connected to internet</h1>
    )
   }
   console.log("This is ListRES",listRes);
    return listRes.length==0?<Shimmer/>: (
             <div className="body">
                <div className="filter flex">
                  <div className="search m-4 p-4 flex items-center">
                      <input type="text" className="border border-solid border-black"  value={searchText} onChange={(e)=>{
                        console.log(e.target.value);
                        setSearchText(e.target.value);
                      }}/>
                      <button
                      className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                      onClick={()=>{
                        console.log(listRes[0].info.name);
                       const filterData=listRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                       console.log(filterData);
                       if(filterData.length>0){setListRes(filterData);}
                       console.log("search button is called....");
                      }}
                      >
                        Search
                      </button>
                   </div>
                   <div className="search m-4 p-4 flex items-center">
                   <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
                    
                    const filterData=listRes.filter((res)=>res.info.avgRating>4);
                    console.log(filterData);
                    //setListRes(filterData);}
                  }
                }
                >Top Rated Restaurant</button>
                   </div>
                      
                </div>
           <div className="flex flex-wrap">
               {/* //Restaurant Card */}
               {
                listRes.map(resturant=>(
                
                <Link key={resturant.info.id} to={"/restaurants/" +resturant.info.id}> 
                { console.log(resturant.info)}
                {
                resturant.info.isOpen?(
                 
                  <RestaurantOpenStatus resData={resturant.info}/>
                  
                ):( <RestaurantCard  
                  restData={resturant.info}/>)}

               </Link>))
               }
              
              
               {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/> */}
              
           </div>

             </div>
    );
};
export default Body;