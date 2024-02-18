import React from "react";
import ReactDOM from "react-dom/client"; 
//React.createElement=>object=>when we render it gives an html element..
import Header from "./components/Header"
import Body from "./components/Body";





const AppLayout=()=>{
    return (
        <div className="app">
                {/* //header */}
                <Header/>
                {/* //Body  */}
                <Body/>
                {/* //Footer */}
        </div>
    )
}
 //const heading=React.createElement("h1",{id:"heading"},"Namaste React using Core React");
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);