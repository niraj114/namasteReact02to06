
import React from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../Constatnts.js"

const Body = () => {

    return (

      <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}

        {

restaurantList.map( (resturant) => {

    return (
        <RestaurantCard key={resturant.data.id} restData ={resturant}/>

    )
})


        }
             </div>
        
     
    );


}

export default Body;