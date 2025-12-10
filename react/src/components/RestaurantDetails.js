import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {

    const { id } = useParams();
    const restaurantDetails = useRestaurantDetails(id);

    const restaurantPlaceHolderImg = new URL('./../assets/placeholder-restaurants.jpg', import.meta.url).href;

    const handleImageError = (e) => {
        e.target.src = restaurantPlaceHolderImg;
    }

    return !restaurantDetails ? <Shimmer /> : (
        <>
            <h1>Restaurant Name: {restaurantDetails.restaurantInfo.name}</h1>
            <img
                src={CDN_URL + restaurantDetails.restaurantInfo.cloudinaryImageId}
                alt='Restaurant Image'
                onError={handleImageError}
                style={{ width: '250px', height: '250px' }}
            />
            {
                restaurantDetails.menuInfo.map(menu => {
                    const { name, price, defaultPrice, id } = menu?.card?.info;
                    return <span key={id}>{name} - {"Rs." + (price ?? defaultPrice) / 100}</span>
                })
            }
        </>
    );
}

export default RestaurantDetails;