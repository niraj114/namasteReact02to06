
import FoodFireLogo from "../Images/Food Fire Logo.png";
import {IMG_CDN_URL} from "../Constatnts"

// Restaurant card component: Image, name, cuisine

const RestaurantCard = (props) => {


    //console.log(props)

    //const {restdata} = props;
//     console.log(props)

    const {name,cuisines, avgRating,cloudinaryImageId} = props.restData;



    return (

        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h5>{cuisines}</h5>
            <h6>{avgRating}*</h6>
        </div>

    )
}

export default RestaurantCard;