import { useRouteError } from 'react-router';

const RouteError = () => {
    const err = useRouteError();
    return (
        <>
            <div>
                Oops!!! Something Went Wrong With Routing....
            </div>
            <div>
                {err?.error?.message}
            </div>
        </>
    );
}

export default RouteError;