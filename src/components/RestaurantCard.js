
import FoodFireLogo from "../Images/Food Fire Logo.png";

// Restaurant card component: Image, name, cuisine

const RestaurantCard = (props) => {

    //const {restdata} = props;
    console.log(props)

   const {name,cuisines, avgRating} = props.restData.data;



    return (

        <div className="card">
            <img src={FoodFireLogo}/>
            <h2>{name}</h2>
            <h5>{cuisines.join(",")}</h5>
            <h6>{avgRating}*</h6>
        </div>

    )
}

export default RestaurantCard;