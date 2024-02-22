import RestaurantCard from "./RestaurantCard";
//import CircularIndeterminate from "./CircularProgress"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
    const[listRes,setListRes]=useState([]);
    const [searchText,setSearchText]=useState("");
    // console.log(restList);
    // console.log(listRes);
    useEffect(()=>{
//    console.log("useEffect called");
fetchData();
    },[])
    const fetchData=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const jsonData=await data.json();
   // console.log(jsonData);
    //optional chaining of data...

    //console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListRes(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        ); 

}
//this is called conditional rendering.............

    return listRes.length==0?<Shimmer/>: (
             <div className="body">
                <div className="filter">
                      <input type="text" className="searchBox" value={searchText} onChange={(e)=>{
                        console.log(e.target.value);
                        setSearchText(e.target.value);
                      }}/>
                      <button
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