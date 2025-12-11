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
        <div className="flex p-1 flex-col gap-2 rounded-md justify-between w-64 text-lg shadow-lg shadow-[salmon]">
            <img
                src={CDN_URL + imgId}
                alt='Restaurant Image'
                onError={handleImageError}
                className="h-64 w-64 object-cover rounded-md"
            />
            <span>{restaurantName}</span>
            <span>Ratings: {avgRating}</span>
            <span>SLA: {sla?.slaString}</span>
            <span>Location: {areaName}</span>
            <span>Cost For Two: {costForTwo}</span>
            <span>Cuisines: {cuisines.join(", ")}</span>
            <button type='button' onClick={openRestaurantDetails} className='px-2 py-1 rounded-lg border cursor-pointer text-lg hover:bg-slate-100'>Check Menu</button>
        </div>
    );
};

export default Restaurant;