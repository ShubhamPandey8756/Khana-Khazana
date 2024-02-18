import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props )=>{
    const {restData}=props;
    // console.log(restData);
    const{
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
        cloudinaryImageId
    }=restData;
    return (<div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img alt="res-logo" className="res-logo" src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>

    </div>)
  }
  export default RestaurantCard;