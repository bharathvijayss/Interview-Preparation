import { useNavigate } from "react-router";
import { CDN_URL } from "../utils/constants";

const Restaurant = ({ details }) => {
    const { cloudinaryImageId: imgId, name: restaurantName, avgRating, sla, areaName, id, costForTwo, cuisines } = details.info;
    const navigate = useNavigate();
    const restaurantPlaceHolderImg = new URL('./../assets/placeholder-restaurants.jpg', import.meta.url).href;

    const openRestaurantDetails = () => {
        navigate(`restaurant/${id}`);
    }

    const handleImageError = (e) => {
        e.target.src = restaurantPlaceHolderImg;
    }

    return (
        <div className="res-card">
            <img
                src={CDN_URL + imgId}
                alt='Restaurant Image'
                onError={handleImageError}
            />
            <span>{restaurantName}</span>
            <span>Ratings: {avgRating}</span>
            <span>SLA: {sla?.slaString}</span>
            <span>Location: {areaName}</span>
            <span>Cost For Two: {costForTwo}</span>
            <span>Cuisines: {cuisines.join(", ")}</span>
            <button type='button' onClick={openRestaurantDetails} className='check-menu-btn'>Check Menu</button>
        </div>
    );
};

export default Restaurant;