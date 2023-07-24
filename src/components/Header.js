
import { Link } from "react-router-dom";
import FoodFireLogo from "../Images/Food Fire Logo.png";

const Tilte = () =>(
    <a herf="/"  ><img className="logo" src={FoodFireLogo} alt="Food Fire Logo"></img></a>
)

const Header  = () =>{

    return (
        <div className="header">
         <Tilte/>
         <div className="nav-item">
            <ul>
                <li className="handPointer" ><Link to="/">Home</Link></li>
                <li className="handPointer"><Link to="/about">About</Link></li>
                <li className="handPointer"><Link to="/contact">Contact</Link></li>
                <li>
                    <i className="fa-solid fa-cart-shoping"></i>
                </li>
            </ul>

         </div>



        </div>



    )
}

export default Header;