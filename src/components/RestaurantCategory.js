import React, { useState } from 'react'
import ItemLists from './ItemLists';

const RestaurantCategory = ({data}) => {
    const [showItem,setShowItem]=useState(false);
    const handleClick=()=>{
        {showItem?setShowItem(false):setShowItem(true);};
    }
  return (
    <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">

             <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                
           <span className="font-bold text-lg">
                 {data.title} ({data.itemCards.length});

           </span>
           <span>⬇️</span>
             </div>
           {showItem  && <ItemLists items={data.itemCards}/>} 
        </div>

        
    
    </div>
    
  )
}

export default RestaurantCategory;