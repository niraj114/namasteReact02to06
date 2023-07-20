import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCrad from "./components/RestaurantCard";
import React from "react";
import ReactDOM  from "react-dom/client";


// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () =>{

    return (
    <><Header /><Body /><RestaurantCrad /></>
      
    );

}


const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the root
root.render(
<AppLayout/>

);