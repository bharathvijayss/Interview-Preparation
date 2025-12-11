import { useEffect, useState } from "react";
import { API_ENDPOINT } from "./constants";

const useRestaurantDetails = (resId) => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);

    const getRestaurantDetails = async () => {
        try {
            const apiRes = await fetch(`${API_ENDPOINT}listRestaurantMenu/${resId}`);
            const jsonData = await apiRes.json();
            setRestaurantDetails({
                restaurantInfo: jsonData.data.cards[2].card.card.info,
                menuCards: jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card?.card?.["@type"] === ('type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'))
            });
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    useEffect(() => {
        getRestaurantDetails();
    }, []);

    return restaurantDetails;
};

export default useRestaurantDetails;