import Header from "./components/Header";
import Body from "./components/Body";
import React from "react";
import ReactDOM  from "react-dom/client";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";




// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () =>{

    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer/>   
        </React.Fragment>

      
    );

}

const appRoute = createBrowserRouter([

    {
        path:"/",
        element:<AppLayout />,

        children : [
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            }

        ],

        errorElement:<ErrorPage />, // it will handle error if path is not matching

    },
    

])


const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside the root
root.render(
//<AppLayout/>
<RouterProvider router={appRoute}/>

);