const AboutUs = () => {
    const bannerImgUrl = new URL('./../assets/about-us.jpg', import.meta.url).href;
    return (
        <>
            <h2>About us</h2>
            <img src={bannerImgUrl} style={{ maxWidth: '100vw', maxHeight: '50vh' }} alt='About Us Banner Image' />
        </>
    );
};

export default AboutUs;