import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent Component Did Mount called");

    }
    render(){
        console.log("Parent Render");
    return(
        <div>
            <h1>About Class Component</h1>
            {/* <User name={"Shubham"} location={"mirzapur"}/> */}
            <UserClass name={"Shubham its Class"} location={"mirzapur by class"}/>
        </div>
    )
    }
}
// const About=()=>{

// }
export default About;