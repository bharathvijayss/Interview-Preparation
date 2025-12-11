// const AboutUs = () => {
//     const bannerImgUrl = new URL('./../assets/about-us.jpg', import.meta.url).href;
//     return (
//         <>
//             <h2>About us</h2>
//             <img src={bannerImgUrl} style={{ maxWidth: '100vw', maxHeight: '50vh' }} alt='About Us Banner Image' />
//         </>
//     );
// };

// export default AboutUs;

import { Component, memo } from "react";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";
import LocationContext from "../utils/LocationContext";

class AboutUsClass extends Component {
    constructor(props) {
        super(props);
        // console.log(`${this.props.name} constructor`);
    }

    bannerImgUrl = new URL('./../assets/about-us.jpg', import.meta.url).href;

    static contextType = UserContext;

    state = {
        count: 0,
        time: new Date().toLocaleTimeString()
    }

    timerId = null;

    MemoizedProfileClassComponent = memo(ProfileClass);

    updateCounter() {
        // this.setState({ count: this.state.count + 1 });
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    componentDidMount() {
        // console.log(`${this.props.name} componentDidMount`);
        // this.timerId = setInterval(() => {
        //     const updatedTime = new Date().toLocaleTimeString();
        //     // console.log('time: ', updatedTime);
        //     this.setState({ time: updatedTime })
        // }, 1000);
    }

    componentWillUnmount() {
        // console.log(`${this.props.name} componentWillUnmount`);
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(`${this.props.name} componentDidUpdate`, prevProps, prevState);
    }

    render() {
        console.log(`${this.props.name} render`);
        return (
            <div style={{ display: 'flex', padding: '8px', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>About us({this.props.name})</h2>
                    <p>Current Count: {this.state.count}</p>
                    <p>Current Time: {this.state.time}</p>
                </div>
                <img src={this.bannerImgUrl} style={{ maxWidth: '100vw', maxHeight: '25vh' }} alt='About Us Banner Image' />
                <button onClick={this.updateCounter.bind(this)} className='px-4 py-2 border rounded cursor-pointer'>Update Count</button>
                <h4>Current LoggedIn User : {this.context.name} </h4>
                <UserContext.Consumer>
                    {
                        ({ role, setUserRole }) => (
                            <>
                                <h4>Current User Role : {role} </h4>
                                <button className='px-4 py-2 border rounded my-2' onClick={() => setUserRole('FrontEnd Developer')}>Change to Technical Role</button>
                            </>
                        )
                    }
                </UserContext.Consumer>
                <LocationContext.Provider value={{ location: 'India' }}>
                    {/* <ProfileClass name='Bharath' city='madurai' />
                    <ProfileClass name='Vijay' city='trichy' /> */}
                    <this.MemoizedProfileClassComponent name='Bharath' city='madurai'></this.MemoizedProfileClassComponent>
                    <this.MemoizedProfileClassComponent name='Vijay' city='trichy'></this.MemoizedProfileClassComponent>
                </LocationContext.Provider>
            </div>
        );
    }
}

export default AboutUsClass;