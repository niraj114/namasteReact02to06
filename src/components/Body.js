
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../Constatnts.js"
import { useState } from "react";


function filterData(searchText, resturents){
  
   const filterData = resturents.filter((resturent) => {
       return  resturent?.data?.name.toLowerCase().includes(searchText.toLowerCase());
    })


    return filterData;

}



// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index

const Body = () => {
  // useState: To create a state variable, searchText is local state variable

    const [searchText, setSearchText] = useState("niraj");

    const [resturents, setResturents] = useState(restaurantList);

    console.log("Call body"+searchText);

    return (


<>


<div className="search-container">

    <input tyep="text" value={searchText} className="search-input" placeholder="Search a restaurant you want..." onChange={(e)=>setSearchText(e.target.value)}></input>

    <button className="search-btn" onClick=
    {() =>{
      const data =  filterData(searchText, resturents);
      setResturents(data);
    }
    }  //filter data 

        
        >
     search
    </button>

</div>

        

      <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}

        {

resturents.map( (resturant) => {

    return (
        <RestaurantCard key={resturant.data.id} restData ={resturant.data}/>

    )
})


        }
</div>
        
</>
    );


}

export default Body;