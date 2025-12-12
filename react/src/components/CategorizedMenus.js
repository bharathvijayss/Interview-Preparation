import MenuItem from "./MenuItem";

const CategorizedMenus = ({ data, toggleCard, isExpanded }) => {
    return (
        <div className='flex flex-col mx-2'>
            <div className='flex justify-between items-center p-4 bg-gray-200 rounded' onClick={toggleCard}>
                <div>{data.title}</div>
                <div>{isExpanded ? "⬆️" : "⬇️"}</div>
            </div>
            {isExpanded && <div className='flex flex-col mt-2 gap-2'>
                {data.itemCards.map((menu) => {
                    return (<MenuItem key={menu.card.info.id} info={menu?.card?.info} type={'add'} />);
                })}
            </div>}
        </div>
    );
}

export default CategorizedMenus;