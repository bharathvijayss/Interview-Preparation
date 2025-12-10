import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';

import Header from './components/Header';
import Body from './components/Body';
import RouteError from './components/RouteError';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Shimmer from './components/Shimmer';

const AppComponent = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    );
};

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