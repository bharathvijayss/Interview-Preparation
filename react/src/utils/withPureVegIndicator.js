const withPureVegIndicator = (WrappedComponent) => {
    return (props) => {
        return (
            <div className="relative">
                <div className='absolute top-0 left-0 p-2 bg-white text-green-500 rounded'>Pure Veg 🟢</div>
                <WrappedComponent {...props} />
            </div>
        );
    }
};

export default withPureVegIndicator;