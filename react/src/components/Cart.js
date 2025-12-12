import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const Cart = () => {
    const bannerImgUrl = new URL('./../assets/cart.png', import.meta.url).href;
    const userInfo = useContext(UserContext);
    const cartItems = useSelector((state) => state.cart.items);
    return (
        <>
            <h2>Hello <b>{userInfo.name}</b>, your role as <b>{userInfo.role}</b> offers you a new Credit Card with Lifetime Free Validity.</h2>
            <div className='flex justify-between items-center'>
                <h2>Checkout {cartItems.length} items added in your cart</h2>
                <img src={bannerImgUrl} style={{ maxWidth: '5vw', maxHeight: '5vh' }} alt='Cart Banner Image' />
            </div>
            <div>
                {
                    cartItems.map((cartItemDetails) => {
                        return <MenuItem info={cartItemDetails.info} key={cartItemDetails.info.id} />
                    })
                }
            </div>
        </>
    );
}

export default Cart;

