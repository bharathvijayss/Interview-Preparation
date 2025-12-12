import { CDN_URL } from "../utils/constants";

const CategorizedMenus = ({ data, toggleCard, isExpanded }) => {
    return (
        <div className='flex flex-col mx-2'>
            <div className='flex justify-between items-center p-4 bg-gray-200 rounded' onClick={toggleCard}>
                <div>{data.title}</div>
                <div>{isExpanded ? "⬆️" : "⬇️"}</div>
            </div>
            {isExpanded && <div className='flex flex-col mt-2 gap-2'>
                {data.itemCards.map((menu) => {
                    return (
                        <div className='flex justify-between items-center border-2 rounded border-gray-200' key={menu.card.info.id}>
                            <div className='flex flex-col justify-between ps-1'>
                                <p>{menu.card.info.name}</p>
                                <p>{menu.card.info.description}</p>
                                <p>Rs.{menu.card.info.price ? menu.card.info.price / 100 : menu.card.info.defaultPrice / 100}</p>
                            </div>
                            <div className='w-24'>
                                <img src={CDN_URL + menu.card.info.imageId} className="w-full" />
                            </div>
                        </div>
                    );
                })}
            </div>}
        </div>
    );
}

export default CategorizedMenus;