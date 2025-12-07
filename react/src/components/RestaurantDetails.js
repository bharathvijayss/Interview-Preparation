import { useEffect, useState } from "react";
import { API_ENDPOINT, CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [menuInfo, setMenuInfo] = useState(null);

    const { id } = useParams();

    const restaurantPlaceHolderImg = new URL('./../assets/placeholder-restaurants.jpg', import.meta.url).href;

    const handleImageError = (e) => {
        e.target.src = restaurantPlaceHolderImg;
    }

    const getRestaurantDetails = async () => {
        try {
            const apiRes = await fetch(`${API_ENDPOINT}listRestaurantMenu/${id}`);
            const jsonData = await apiRes.json();
            setRestaurantInfo(jsonData.data.cards[2].card.card.info);
            setMenuInfo(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
            console.log(jsonData.data.cards[2].card.card.info);
            console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);

        } catch (err) {
            console.log("Error: ", err);
        }
    };

    useEffect(() => {
        getRestaurantDetails();
    }, []);

    return !restaurantInfo ? <Shimmer /> : (
        <>
            <h1>Restaurant Name: {restaurantInfo.name}</h1>
            <img
                src={CDN_URL + restaurantInfo.cloudinaryImageId}
                alt='Restaurant Image'
                onError={handleImageError}
                style={{ width: '250px', height: '250px' }}
            />
            {
                menuInfo.map(menu => {
                    const { name, price, defaultPrice } = menu?.card?.info;
                    return <span>{name} - {"Rs." + (price ?? defaultPrice) / 100}</span>
                })
            }
        </>
    );
}

export default RestaurantDetails;