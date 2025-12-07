import Restaurant from './Restaurant';
import { Fragment, useEffect, useState } from "react";
import { API_ENDPOINT } from "./../utils/constants";
import Shimmer from './Shimmer';

const Body = () => {

    const [searchText, setSearchText] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    async function fetchRestaurantList() {
        try {
            const apiRes = await fetch(`${API_ENDPOINT}listRestaurants`);
            if (apiRes.ok) {
                const jsonRes = await apiRes.json();
                const restaurantList = jsonRes?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setRestaurants(restaurantList);
                setfilteredRestaurants(restaurantList);
            } else {
                throw new Error('Failed to fetch restaurant list ' + apiRes.status);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchRestaurantList();
    }, []);

    function filterTopRestaurants() {
        setfilteredRestaurants(restaurants.filter(x => x.info.avgRating >= 4.5));
    }

    function handleSearchInputChange(e) {
        setSearchText(e.target.value);
    }

    function searchRestaurants() {
        setfilteredRestaurants(restaurants.filter(x => x.info.name.toLowerCase().includes(searchText.toLowerCase())));
    }

    if (restaurants.length === 0) return <Shimmer />;

    return (
        <Fragment>
            <div className='search-filter-container'>
                <div className='search-container'>
                    {/* <input type='search' placeholder="Search for restaurants and food" className="search-input" value={searchText} onChange={handleSearchInputChange} /> */}
                    <input type='search' placeholder="Search for restaurants and food" className="search-input" value={searchText} onChange={(e) => handleSearchInputChange(e)} />
                    <button type='button' className="search-btn" onClick={searchRestaurants}>Search</button>
                </div>
                <button type='button' className="filter-btn" onClick={filterTopRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants?.map(resDetails => <Restaurant details={resDetails} key={resDetails.info.id} />)}
            </div>
        </Fragment>
    );
};

export default Body;