
import React from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../Constatnts.js"

const Body = () => {

    return (

      <div className="restaurant-list">

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