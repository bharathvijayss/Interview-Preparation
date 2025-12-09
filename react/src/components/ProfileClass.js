import { Component } from "react";

class ProfileClass extends Component {
    constructor(props) {
        super(props);
        console.log(`${this.props.name} constructor`);
    }

    componentDidMount() {
        console.log(`${this.props.name} componentDidMount`);
    }

    componentWillUnmount() {
        console.log(`${this.props.name} componentWillUnmount`);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`${this.props.name} componentDidUpdate`, prevProps, prevState);
    }

    render() {
        console.log(`${this.props.name} render`);
        return (
            <div style={{ border: '1px solid orange', padding: '4px', borderRadius: '4px' }}>
                <p>Name: {this.props.name}</p>
                <p>City: {this.props.city}</p>
            </div>
        );
    }
}

export default ProfileClass;