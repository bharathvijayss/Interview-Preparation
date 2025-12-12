import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const MenuItem = ({ info, type }) => {

    const disptacher = useDispatch();
    const checkout = () => {
        if (type === 'add') {
            disptacher(addToCart({ info, type }));
        } else {
            disptacher(removeFromCart(info.id));
        }
    }

    return (<div className='flex justify-between items-center border-2 rounded border-gray-200' >
        <div className='flex flex-col justify-between ps-1'>
            <p>{info?.name}</p>
            <p>{info?.description}</p>
            <p>Rs.{info?.price ? info?.price / 100 : info?.defaultPrice / 100}</p>
        </div>
        <div className='w-24 relative'>
            <img src={CDN_URL + info?.imageId} className="w-full" />
            <button onClick={checkout} className='absolute bottom-0 rounded p-1 -translate-x-6/12 ml-[50%] bg-white text-red-400'>
                {type === 'add' ? "🛒" : "❌"}
            </button>
        </div>
    </div>);
}

export default MenuItem;