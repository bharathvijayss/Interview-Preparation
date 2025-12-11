import { lazy, Suspense, useMemo, useState, memo } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';

import Header from './components/Header';
import Body from './components/Body';
import RouteError from './components/RouteError';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';

const AppComponent = () => {

    // const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('Bharath Vijay S S');
    const [userRole, setUserRole] = useState('Admin');
    // const contextValue = { name: userName, setUserName, role: userRole, setUserRole };
    const contextValue = useMemo(() => ({ name: userName, setUserName, role: userRole, setUserRole }), [userName, userRole]);

    return (
        <UserContext.Provider value={contextValue}>
            <div className="flex flex-col gap-4 h-screen w-screen">
                {/* {count} */}
                {/* <button className='px-4 py-2 border rounded cursor-pointer w-32' onClick={() => setCount(count + 1)}>Update Count</button> */}
                <UserContext.Provider value={{ name: 'Guest User' }}>
                    <Header />
                </UserContext.Provider>
                <Outlet />
            </div>
        </UserContext.Provider>
    );
};

// const AboutUsClass = memo(lazy(() => import("./components/AboutUsClass")));
const AboutUsClass = lazy(() => import("./components/AboutUsClass"));
const RestaurantDetails = lazy(() => import("./components/RestaurantDetails"));

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <AppComponent />,
        errorElement: <RouteError />,
        children: [
            {
                index: true,
                element: <Body />
            },
            {
                path: 'about-us',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <AboutUsClass name='Foody' />
                    </Suspense>
                )
            },
            {
                path: 'contact-us',
                element: <ContactUs />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'restaurant/:id',
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <RestaurantDetails />
                    </Suspense>
                )
            }
        ]
    }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoutes} />);