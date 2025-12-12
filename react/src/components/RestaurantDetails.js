import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import CategorizedMenus from "./CategorizedMenus";
import { useEffect, useState } from "react";

const RestaurantDetails = () => {

    const { id } = useParams();
    const restaurantDetails = useRestaurantDetails(id);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const restaurantPlaceHolderImg = new URL('./../assets/placeholder-restaurants.jpg', import.meta.url).href;

    const handleImageError = (e) => {
        e.target.src = restaurantPlaceHolderImg;
    }

    return !restaurantDetails ? <Shimmer /> : (
        <>
            <div className='flex justify-between items-center'>
                <div className='mx-2 flex flex-col'>
                    <h4 className='bold'>{restaurantDetails.restaurantInfo.name}</h4>
                    <h4 >{restaurantDetails.restaurantInfo.locality} - {restaurantDetails.restaurantInfo.areaName}</h4>
                    <h4 >{restaurantDetails.restaurantInfo.cuisines.join(", ")}</h4>
                    <h4 >{restaurantDetails.restaurantInfo.costForTwo}</h4>
                </div>
                <img
                    src={CDN_URL + restaurantDetails.restaurantInfo.cloudinaryImageId}
                    alt='Restaurant Image'
                    onError={handleImageError}
                    style={{ width: '100px', height: '100px' }}
                    className='mx-2'
                />
            </div>
            {
                restaurantDetails.menuCards.map((menuList, index) => {
                    return <CategorizedMenus
                        key={menuList.card.card.title}
                        data={menuList.card.card}
                        toggleCard={() => {
                            setSelectedCategory(selectedCategory === index ? null : index)
                        }}
                        isExpanded={selectedCategory === index}
                    />
                })
            }
        </>
    );
}

export default RestaurantDetails;