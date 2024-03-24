import React from "react";
class UserClass extends React.Component{
   constructor(props){
    super(props);
    this.state={
        count:1,
        count2:2
    }
    console.log(" child constructor");
   }
   componentDidMount(){
    console.log("child Component Did Mount called");

}
   render(){
    const{name,location}=this.props;
    const{count,count2}=this.state;
    console.log(" child rendor");
  return (
    <div className="user">
        <button onClick={()=>{this.setState({
            count:this.state.count+1,
        })}}>Count Increase</button>
        <h1>Count:{count}</h1>
        <h2>Count2:{count2}</h2>
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>

    </div>);
}

   
}
export default UserClass; 