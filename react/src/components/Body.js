import { restaurants } from "../utils/mockData";
import Restaurant from './Restaurant';

const Body = () => {
    return (
        <div className="res-container">
            {restaurants?.map(resDetails => <Restaurant details={resDetails} key={resDetails.info.id} />)}
        </div>
    );
};

export default Body;