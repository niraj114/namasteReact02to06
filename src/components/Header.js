
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
                <li className="handPointer">Home</li>
                <li className="handPointer">About</li>
                <li className="handPointer">Contact</li>
                <li>
                    <i className="fa-solid fa-cart-shoping"></i>
                </li>
            </ul>

         </div>



        </div>



    )
}

export default Header;