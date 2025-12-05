import { CDN_URL } from "../utils/constants";

const Restaurant = ({ details }) => {
    const { cloudinaryImageId: imgId, name: restaurantName, avgRating, sla, areaName } = details.info;
    return (
        <div className="res-card">
            <img src={CDN_URL + imgId} />
            <span>{restaurantName}</span>
            <span>Ratings: {avgRating}</span>
            <span>SLA: {sla?.slaString}</span>
            <span>Location: {areaName}</span>
        </div>
    );
};

export default Restaurant;