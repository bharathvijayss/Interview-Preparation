import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';

import Header from './components/Header';
import Body from './components/Body';
import RouteError from './components/RouteError';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import RestaurantDetails from './components/RestaurantDetails';

const AppComponent = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    );
};

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
                element: <AboutUs />
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
                element: <RestaurantDetails />
            }
        ]
    }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoutes} />);