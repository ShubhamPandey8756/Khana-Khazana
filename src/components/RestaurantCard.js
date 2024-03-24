import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props )=>{
    const {resData}=props;
    console.log("props is ",props);
    console.log("this is Resdata which i am checking now",resData);
     console.log("in Restaurant card u are",resData);
    const{
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
        cloudinaryImageId
    }=resData;
    return (<div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img alt="res-logo" className="rounded-lg" src={CDN_URL+cloudinaryImageId}/>
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>

    </div>)
  }
   export const withOpenLabel=(RestaurantCard)=>{
    return(props)=>{
        return(<div>
               <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
               <RestaurantCard {...props}/>

        </div>);
    };
   };

  export default RestaurantCard;