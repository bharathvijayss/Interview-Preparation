const Cart = () => {
    const bannerImgUrl = new URL('./../assets/cart.png', import.meta.url).href;
    return (
        <>
            <h2>Cart</h2>
            <img src={bannerImgUrl} style={{ maxWidth: '100vw', maxHeight: '50vh' }} alt='Cart Banner Image' />
        </>
    );
}

export default Cart;

