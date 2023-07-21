import Header from "./components/Header";
import Body from "./components/Body";
import React from "react";
import ReactDOM  from "react-dom/client";
import Footer from "./components/Footer";


// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () =>{

    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer/>   
        </React.Fragment>

      
    );

}


const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the root
root.render(
<AppLayout/>

);