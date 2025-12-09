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

import { Component } from "react";
import ProfileClass from "./ProfileClass";

class AboutUsClass extends Component {
    constructor(props) {
        super(props);
        console.log(`${this.props.name} constructor`);
    }

    bannerImgUrl = new URL('./../assets/about-us.jpg', import.meta.url).href;

    state = {
        count: 0,
        time: new Date().toLocaleTimeString()
    }

    timerId = null;

    updateCounter() {        
        this.setState({ count: this.state.count + 1 });
    }

    componentDidMount() {
        console.log(`${this.props.name} componentDidMount`);
        this.timerId = setInterval(() => {
            const updatedTime = new Date().toLocaleTimeString();
            console.log('time: ', updatedTime);
            this.setState({ time: updatedTime })
        }, 1000);
    }

    componentWillUnmount() {
        console.log(`${this.props.name} componentWillUnmount`);
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`${this.props.name} componentDidUpdate`, prevProps, prevState);
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
                <button onClick={this.updateCounter.bind(this)}>Update Count</button>
                <ProfileClass name='Bharath' city='madurai' />
                <ProfileClass name='Vijay' city='trichy' />
            </div>
        );
    }
}

export default AboutUsClass;