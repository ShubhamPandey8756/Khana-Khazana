import React from "react";
import ReactDOM from "react-dom/client"; 
//React.createElement=>object=>when we render it gives an html element..
import Header from "./components/Header"
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuPAge from "./components/RestaurantMenuPAge";



const AppLayout=()=>{
    return (

        <div className="app">
                {/* //header */}
                <Header/>
               <Outlet/>
        </div>
    );
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>
      },
      {
            path:"/about",
            element:<About/>,
    },
    {
        path:"/contact",
        element:<Contact/>,
    },
    {
        //lets make dynamic route(:resID is the dynamic it change acc to the restaurant`)
        path:"/restaurants/:resId",
        element:<RestaurantMenuPAge/>
    }
    ]
}
]); 

 //const heading=React.createElement("h1",{id:"heading"},"Namaste React using Core React");
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>);